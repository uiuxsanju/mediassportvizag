"use client";

import { useState } from "react";

// Video background yellow tho match avvali. Video frame nundi exact hex teesukoni ikkada marchandi.
const SPLASH_BG = "#FDD835";

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
      style={{ backgroundColor: SPLASH_BG }}
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <video
        src="/intro.mp4"
        autoPlay
        muted
        playsInline
        onEnded={closeSplash}
        onError={closeSplash}
        className="h-full w-full object-contain lg:scale-150"
      />

      {/* Skip button */}
      <button
        onClick={closeSplash}
        className="absolute bottom-8 right-8 rounded-full border border-black/40 px-5 py-2 text-sm font-medium text-black/80 backdrop-blur-sm transition hover:bg-black/10"
      >
        Skip →
      </button>
    </div>
  );
}