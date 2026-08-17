"use client";

import { useEffect, useRef, useState } from "react";
import { X, Camera } from "lucide-react";
import { createPortal } from "react-dom";

type CameraCaptureProps = {
  adminKey: string;
  onClose: () => void;
  onUploaded: () => Promise<void>;
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
  const [mounted, setMounted] = useState(false);

  // Wait until the component is mounted before using document.body.
  useEffect(() => {
    setMounted(true);
  }, []);

  // Start camera only after the portal can render the video element.
  useEffect(() => {
    if (!mounted) return;

    let cancelled = false;

    navigator.mediaDevices
      .getUserMedia({
        video: {
          facingMode: "user",
        },
      })
      .then((stream) => {
        if (cancelled) {
          stream.getTracks().forEach((track) => track.stop());
          return;
        }

        streamRef.current = stream;

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => {
        console.error("Camera error:", err);
        setError("Couldn't access the camera.");
      });

    return () => {
      cancelled = true;

      streamRef.current?.getTracks().forEach((track) => {
        track.stop();
      });

      streamRef.current = null;
    };
  }, [mounted]);

  const capture = () => {
    const video = videoRef.current;

    if (!video) return;

    if (!video.videoWidth || !video.videoHeight) {
      setError("Camera is still loading. Please try again.");
      return;
    }

    const canvas = document.createElement("canvas");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    ctx.drawImage(video, 0, 0);

    canvas.toBlob(
      async (blob) => {
        if (!blob) {
          setError("Failed to capture image.");
          return;
        }

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

          const data = await res.json();

          console.log("Upload response:", data);

          if (!res.ok) {
            throw new Error(
              data.error ||
                (res.status === 401
                  ? "Admin key rejected."
                  : "Upload failed.")
            );
          }

          await onUploaded();
          onClose();
        } catch (err) {
          console.error("Story upload error:", err);

          setError(
            err instanceof Error
              ? err.message
              : "Upload failed."
          );
        } finally {
          setUploading(false);
        }
      },
      "image/jpeg",
      0.9
    );
  };

  if (!mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md sm:p-8">
      <div className="relative h-[90vh] w-[min(90vw,520px)] max-w-[520px] overflow-hidden rounded-3xl bg-black shadow-2xl ring-1 ring-white/10">

        {/* Camera */}
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="h-full w-full object-cover"
        />

        {/* Error */}
        {error && (
          <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/60 px-8 text-center backdrop-blur-sm">
            <p className="text-sm text-white/80">
              {error}
            </p>
          </div>
        )}

        {/* Top gradient */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/50 to-transparent" />

        {/* Title */}
        <div className="absolute left-5 top-6 z-20">
          <span className="text-sm font-medium text-white">
            Add Story
          </span>
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close camera"
          className="absolute right-5 top-5 z-20 rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X size={26} />
        </button>

        {/* Capture */}
        {!error && (
          <button
            onClick={capture}
            disabled={uploading}
            aria-label="Capture story"
            className="absolute bottom-8 left-1/2 z-20 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white/80 bg-white/20 backdrop-blur-sm transition-transform duration-150 active:scale-90 disabled:opacity-50"
          >
            <Camera size={26} className="text-white" />
          </button>
        )}

        {/* Uploading */}
        {uploading && (
          <div className="absolute inset-0 z-40 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="rounded-full bg-black/60 px-5 py-3 text-sm font-medium text-white">
              Uploading...
            </div>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}