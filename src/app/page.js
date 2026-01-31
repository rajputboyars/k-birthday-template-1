// app/page.jsx
"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Countdown from "../components/Countdown";
import Wishes from "../components/Wishes";
import FullscreenSlide from "../components/FullscreenSlide";

// Dynamic import for client-side rendering
const Carousel3D = dynamic(() => import("../components/Carousel3D"), { ssr: false });

export default function Home() {
  const [done, setDone] = useState(false);
  const [showCarousel, setShowCarousel] = useState(false);

  // Set your target ISO date/time here:
  const targetISO = "2025-11-09T00:00:00"; // change to the desired date/time

  return (
    // Updated Styling: Text is white, background image is still used.
    <main
      className="h-screen flex items-center justify-center p-8 text-white relative"
      style={{
        backgroundImage: `url('/background/background4.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Semi-transparent overlay for better contrast, using a subtle pink tint */}
      <div className="absolute inset-0 bg-black/40 backdrop-brightness-75"></div>
      
      {/* Content wrapper with z-index to be above the overlay */}
      <div className="relative z-10">
        {!done ? (
          // Countdown Section Styling:
          // 1. Frosted glass card with white/pink tint.
          // 2. Strong shadow using deep pink/fuchsia for glow.
          <div className="text-center p-10 md:p-16 rounded-3xl backdrop-blur-md bg-pink-100/20 shadow-md shadow-fuchsia-600/60 transform transition-all duration-500 hover:scale-[1.02]">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-wider text-shadow-lg drop-shadow-lg text-pink-300">
              Countdown to the surprise 💖
            </h2>
            <Countdown
              targetDateISO={targetISO}
              onComplete={() => setDone(true)}
            />
          </div>
        ) : (
          // Wishes Section (The component itself needs styling, but we ensure it's centered)
          <div className="flex items-center justify-center">
            <Wishes
              visible={done}
              friendName="Cutie"
              photo="/photo.jpg"
              audio="/happy-birthday.mp3"
              onOpenCarousel={() => setShowCarousel(true)}
            />
          </div>
        )}
      </div>

      {/* Full-screen carousel / video slide */}
      {showCarousel && (
        <FullscreenSlide
          images={["/carousel/1.jpg", "/carousel/2.jpg", "/carousel/3.jpg"]}
          onClose={() => setShowCarousel(false)}
        />
      )}
    </main>
  );
}