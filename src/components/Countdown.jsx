"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ModalPeek from "./ModalPeek";

export default function Countdown({ targetDateISO, onComplete }) {
  const target = new Date(targetDateISO).getTime();
  const [timeLeft, setTimeLeft] = useState(Math.max(0, target - Date.now()));
  const [showPeek, setShowPeek] = useState(false);

  // Timer logic
  useEffect(() => {
    const id = setInterval(() => {
      const diff = Math.max(0, target - Date.now());
      setTimeLeft(diff);
      if (diff <= 0) {
        clearInterval(id);
        onComplete && onComplete();
      }
    }, 250);
    return () => clearInterval(id);
  }, [target, onComplete]);

  const ms = timeLeft;
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));
  const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((ms / (1000 * 60)) % 60);
  const secs = Math.floor((ms / 1000) % 60);

  const pad = (v) => String(v).padStart(2, "0");

  return (
    <div className="flex flex-col items-center gap-6 w-full px-4 py-8">
      {/* Countdown Boxes */}
      <div className="
        flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 
        w-full max-w-xl
      ">
        <TimeCard label="Days" value={days} />
        <TimeCard label="Hours" value={pad(hours)} />
        <TimeCard label="Mins" value={pad(mins)} />
        <TimeCard label="Secs" value={pad(secs)} />
      </div>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(236, 72, 153, 0.8)" }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowPeek(true)}
        className="mt-6 bg-fuchsia-600 text-white text-sm sm:text-base md:text-lg font-semibold tracking-wide
                   hover:bg-fuchsia-700 transition-colors duration-300 px-6 sm:px-8 py-3 sm:py-4 
                   rounded-full shadow-xl shadow-fuchsia-500/50 text-center"
      >
        Ab aur sabar nahi hota mujhe 😍 Abhi dekhna hai!
      </motion.button>

      <ModalPeek open={showPeek} onClose={() => setShowPeek(false)} />
    </div>
  );
}

function TimeCard({ label, value }) {
  return (
    <div
      className="
        bg-pink-100/30 backdrop-blur-sm rounded-xl 
        w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 
        flex flex-col justify-center items-center 
        border-2 border-pink-400 shadow-lg shadow-pink-500/30 
        transition-transform duration-300 hover:scale-[1.05]
      "
    >
      <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-pink-300 drop-shadow-md">
        {value}
      </div>
      <div className="text-xs sm:text-sm md:text-base text-white opacity-90 tracking-wider mt-1">
        {label}
      </div>
    </div>
  );
}
