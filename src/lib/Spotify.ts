const client_id = process.env.SPOTIFY_CLIENT_ID!;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET!;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN!;

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing";
const RECENTLY_PLAYED_ENDPOINT =
  "https://api.spotify.com/v1/me/player/recently-played?limit=1";

export type SpotifyTrack = {
  isPlaying: boolean;
  name: string;
  artist: string;
  albumImage: string | null;
  url: string;
};

async function getAccessToken(): Promise<string> {
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Spotify token refresh failed: ${response.status}`);
  }

  const data = await response.json();
  return data.access_token;
}

type SpotifyArtist = { name: string };
type SpotifyImage = { url: string };
type SpotifyItem = {
  name: string;
  artists: SpotifyArtist[];
  album: { images: SpotifyImage[] };
  external_urls: { spotify: string };
};

export async function getLastPlayed(): Promise<SpotifyTrack | null> {
  const access_token = await getAccessToken();
  const authHeader = { Authorization: `Bearer ${access_token}` };

  // Try "currently playing" first
  const nowRes = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: authHeader,
    cache: "no-store",
  });

  console.log("[spotify] currently-playing status:", nowRes.status);

  if (nowRes.status === 200) {
    const nowData = await nowRes.json();
    console.log("[spotify] currently-playing body:", JSON.stringify(nowData).slice(0, 300));
    if (nowData?.item) {
      const item: SpotifyItem = nowData.item;
      return {
        isPlaying: true,
        name: item.name,
        artist: item.artists.map((a) => a.name).join(", "),
        albumImage: item.album.images[0]?.url ?? null,
        url: item.external_urls.spotify,
      };
    }
  } else if (nowRes.status !== 204) {
    const errBody = await nowRes.text();
    console.log("[spotify] currently-playing error body:", errBody);
  }

  // Fall back to most recently played track
  const recentRes = await fetch(RECENTLY_PLAYED_ENDPOINT, {
    headers: authHeader,
    cache: "no-store",
  });

  console.log("[spotify] recently-played status:", recentRes.status);

  if (!recentRes.ok) {
    const errBody = await recentRes.text();
    console.log("[spotify] recently-played error body:", errBody);
    return null;
  }

  const recentData = await recentRes.json();
  const track: SpotifyItem | undefined = recentData?.items?.[0]?.track;
  if (!track) {
    console.log("[spotify] recently-played body had no track:", JSON.stringify(recentData).slice(0, 300));
    return null;
  }

  return {
    isPlaying: false,
    name: track.name,
    artist: track.artists.map((a) => a.name).join(", "),
    albumImage: track.album.images[0]?.url ?? null,
    url: track.external_urls.spotify,
  };
}