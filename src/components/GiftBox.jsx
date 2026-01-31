// components/GiftBox.jsx
"use client";
import { motion } from "framer-motion";

export default function GiftBox({ onOpen }) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 1.4, repeat: Infinity }}
      className="relative"
    >
      <motion.img
        src="/gift.png"
        alt="gift"
        onClick={onOpen}
        whileTap={{ scale: 0.96, rotate: -6 }}
        whileHover={{ scale: 1.06 }}
        className="w-56 h-56 cursor-pointer select-none"
      />
    </motion.div>
  );
}
