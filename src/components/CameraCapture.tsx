"use client";

import { useEffect, useRef, useState } from "react";
import { X, Camera } from "lucide-react";

type CameraCaptureProps = {
  adminKey: string;
  onClose: () => void;
  onUploaded: () => void;
};

export default function CameraCapture({
  adminKey,
  onClose,
  onUploaded,
}: CameraCaptureProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    let cancelled = false;

    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: "user" } })
      .then((stream) => {
        if (cancelled) {
          stream.getTracks().forEach((t) => t.stop());
          return;
        }
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch(() => setError("Couldn't access the camera."));

    return () => {
      cancelled = true;
      streamRef.current?.getTracks().forEach((t) => t.stop());
    };
  }, []);

  const capture = async () => {
    const video = videoRef.current;
    if (!video) return;

    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.drawImage(video, 0, 0);

    canvas.toBlob(
      async (blob) => {
        if (!blob) return;
        setUploading(true);
        setError(null);

        try {
          const formData = new FormData();
          formData.append("file", blob, "story.jpg");
          formData.append("adminKey", adminKey);

          const res = await fetch("/api/stories", {
            method: "POST",
            body: formData,
          });

          if (!res.ok) {
            throw new Error(
              res.status === 401
                ? "Admin key rejected."
                : "Upload failed."
            );
          }

          onUploaded();
          onClose();
        } catch (err) {
          setError(err instanceof Error ? err.message : "Upload failed.");
        } finally {
          setUploading(false);
        }
      },
      "image/jpeg",
      0.9
    );
  };

  return (
    <div className="fixed inset-0 z-[110] flex flex-col items-center justify-center bg-black">
      <button
        onClick={onClose}
        aria-label="Close camera"
        className="absolute right-6 top-6 z-10 text-white/80 transition-colors hover:text-white"
      >
        <X size={28} />
      </button>

      {error ? (
        <p className="max-w-xs text-center text-sm text-white/80">{error}</p>
      ) : (
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="h-full w-full object-cover"
        />
      )}

      {!error && (
        <button
          onClick={capture}
          disabled={uploading}
          aria-label="Capture story"
          className="absolute bottom-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white/80 bg-white/20 backdrop-blur-sm transition-transform duration-150 active:scale-90 disabled:opacity-50"
        >
          <Camera size={26} className="text-white" />
        </button>
      )}
    </div>
  );
}
