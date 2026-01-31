// components/ModalPeek.jsx
"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ModalPeek({ open, onClose }) {
  // Logic to auto-close after 5 seconds remains the same
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => onClose && onClose(), 5000); // auto close 5s
    return () => clearTimeout(t);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          {/* Backdrop with a pinkish tint */}
          <div className="absolute inset-0 backdrop-blur-sm" onClick={() => onClose && onClose()} />
          
          {/* Modal Content Card */}
          <motion.div
            initial={{ scale: 0.8, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0 }}
            // ✨ Pink Theme Styling: White card with pink borders/shadows
            className="relative bg-white rounded-3xl p-8 shadow-2xl max-w-md w-11/12 text-center border-4 border-pink-300 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-300"
          >
            {/* Emojis remain for fun */}
            <div className="text-5xl mb-4 animate-bounce">🤭🤫💖</div>
            
            {/* Heading text with pink emphasis */}
            <div className="text-2xl font-extrabold text-fuchsia-600 drop-shadow-sm">
              Are bhai ruk jao!
            </div>
            
            {/* Subtext */}
            <p className="mt-3 text-lg text-gray-700 font-medium">
              **Sabar ka fal meetha hota hai..** <br /> Thoda sa hi toh time bacha hai!
            </p>
            
            {/* Close Button styled in pink */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onClose && onClose()}
              className="mt-6 px-6 py-2 bg-pink-500 text-white font-semibold rounded-full shadow-lg hover:bg-pink-600 transition-colors duration-200"
            >
              Okay, I'll wait! 😫
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}