"use client";
import { AnimatePresence, motion } from "framer-motion";
import Typewriter from "@/components/Typewriter";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function LastGiftPage() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const v = videoRef.current;
    if (v) v.play().catch(() => {});
  }, []);

  const handleUnmute = () => {
    const v = videoRef.current;
    if (v) {
      v.muted = false;
      v.play().catch(() => {});
      setIsMuted(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-white to-fuchsia-100 text-center p-8"
    >
      <motion.h1
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-500 mb-8"
      >
        Final Surprise! 🎁
      </motion.h1>

      <div className="max-w-4xl w-full bg-white/70 backdrop-blur-md rounded-xl shadow-2xl p-6 md:p-8 space-y-8 border-4 border-pink-200">
        <Typewriter
          speed={50}
          text="I wish ye apko pasand aaye... Ye chhota sa gift hai apke liye, Happy Birthday once again 🎉💖"
          className="text-lg md:text-2xl text-gray-800 leading-relaxed font-serif whitespace-pre-wrap"
        />

        <AnimatePresence>
          <motion.div
            key="video"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-[300px] mx-auto flex items-center justify-center rounded-2xl overflow-hidden shadow-xl"
          >
            <motion.video
              ref={videoRef}
              src="/video/MicrosoftTeams-video.mp4"
              muted={isMuted}
              autoPlay
              loop
              playsInline
              className="w-full h-full object-cover"
            />

            {/* Show Unmute button if muted */}
            {isMuted && (
              <motion.button
                onClick={handleUnmute}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute inset-0 bg-black/40 text-white text-lg font-semibold flex items-center justify-center"
              >
                🔊 Tap to Unmute
              </motion.button>
            )}
          </motion.div>
        </AnimatePresence>

        <Link href="/" passHref>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 10px 15px -3px rgba(255, 99, 172, 0.5), 0 4px 6px -2px rgba(255, 99, 172, 0.25)",
            }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-4 text-2xl font-bold rounded-full text-white bg-gradient-to-r from-pink-500 to-fuchsia-600 transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
          >
            Replay Gift! 🔄 (Back to Home)
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}
