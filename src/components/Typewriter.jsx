// components/Typewriter.jsx
"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Typewriter component
 * - text: string to type
 * - speed: milliseconds per character (number). Default 50ms.
 * - className: optional className for styling
 */
export default function Typewriter({ text = "", speed = 50, className = "" }) {
  const [display, setDisplay] = useState("");
  const indexRef = useRef(0);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(0);
  const textRef = useRef(text);

  // Keep latest text in ref so tick always reads current value
  useEffect(() => {
    textRef.current = text ?? "";
  }, [text]);

  useEffect(() => {
    // sanitize speed
    const charMs = Math.max(10, Number(speed) || 50);

    // reset
    cancelAnimationFrame(rafRef.current);
    indexRef.current = 0;
    setDisplay("");

    // if empty text, nothing to do
    if (!textRef.current) return;

    // we want the first character to show quickly — set lastTime so first tick triggers immediately
    lastTimeRef.current = performance.now() - charMs;

    const tick = (now) => {
      // calculate elapsed since last char
      const elapsed = now - lastTimeRef.current;
      if (elapsed >= charMs) {
        // increment index by how many chars should have appeared (in case of large frame gaps)
        const step = Math.max(1, Math.floor(elapsed / charMs));
        indexRef.current = Math.min(textRef.current.length, indexRef.current + step);
        // set display using slice (no reliance on previous state)
        setDisplay(textRef.current.slice(0, indexRef.current));

        // update lastTimeRef to account for the consumed steps
        lastTimeRef.current = now;
      }

      if (indexRef.current < textRef.current.length) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        rafRef.current = null;
      }
    };

    // start
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [text, speed]); // restart when text or speed changes

  return <span className={className}>{display}</span>;
}
