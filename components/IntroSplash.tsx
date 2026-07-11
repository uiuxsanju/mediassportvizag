"use client";

import { useState } from "react";

export default function IntroSplash() {
  const [show, setShow] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const closeSplash = () => {
    setFadeOut(true);
    setTimeout(() => {
      setShow(false);
    }, 600); // fade-out duration
  };

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <video
        src="/intro.mp4"
        autoPlay
        muted
        playsInline
        onEnded={closeSplash}
        className="h-full w-full object-cover"
      />

      {/* Skip button */}
      <button
        onClick={closeSplash}
        className="absolute bottom-8 right-8 rounded-full border border-white/40 px-5 py-2 text-sm text-white/80 backdrop-blur-sm transition hover:bg-white/10"
      >
        Skip →
      </button>
    </div>
  );
}