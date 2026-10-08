"use client";

import { useEffect, useRef, useState } from "react";

const PLAYBACK_RATE = 0.75;

// Background video for the hero. It plays once, then fades away to reveal the
// skyline photo underneath, which is also the first paint and the fallback
// when motion is reduced or the video fails.
export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [state, setState] = useState<"idle" | "playing" | "ended">("idle");

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    video.playbackRate = PLAYBACK_RATE;
    video.play().catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      className={`hero__video${state === "playing" ? " is-playing" : ""}`}
      src="/hero-video.mp4"
      muted
      playsInline
      preload="auto"
      aria-hidden="true"
      onPlaying={() => setState("playing")}
      onEnded={() => setState("ended")}
    />
  );
}
