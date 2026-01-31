"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import dynamic from "next/dynamic";
import Typewriter from "./Typewriter";
import GiftBox from "./GiftBox";
import lottieConfetti from "../../public/lottie/confetti.json";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Wishes({
  visible = true,
  friendName = "Friend",
  photo = "/photo.jpg",
  audio = "/happy-birthday.mp3",
  onOpenCarousel,
}) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [showGift, setShowGift] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [showLottie, setShowLottie] = useState(false);

  // 🎉 Tenor fix
  useEffect(() => {
    if (!window?.Tenor) {
      const script = document.createElement("script");
      script.src = "https://tenor.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      if (window.Tenor?.init) window.Tenor.init();
    }
  }, [showGift, visible]);

  useEffect(() => {
    if (!visible) return;

    const playMusic = async () => {
      try {
        audioRef.current = new Audio(audio);
        audioRef.current.volume = 0.7;
        await audioRef.current.play();
        setPlaying(true);
      } catch (err) {
        console.warn("Autoplay blocked by browser, user interaction needed.");
      }
    };

    playMusic();

    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 },
      colors: ["#FFC0CB", "#FF69B4", "#DA70D6", "#FFA07A", "#FFD700"],
    });

    const end = Date.now() + 60 * 1000;
    const interval = setInterval(() => {
      confetti({
        particleCount: 20,
        angle: 90,
        spread: 60,
        origin: { x: Math.random(), y: 0 },
        colors: ["#FFC0CB", "#FF69B4", "#DA70D6", "#FFA07A", "#FFD700"],
      });
      if (Date.now() > end) clearInterval(interval);
    }, 1200);

    setShowTypewriter(true);
    const t1 = setTimeout(() => setShowLottie(true), 5000);
    const t2 = setTimeout(() => setShowGift(true), 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(t1);
      clearTimeout(t2);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [visible, audio]);

  const toggleAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(audio);
      audioRef.current.play();
      setPlaying(true);
      return;
    }
    if (audioRef.current.paused) {
      audioRef.current.play();
      setPlaying(true);
    } else {
      audioRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 flex items-center justify-center p-6 text-white"
          style={{
            backgroundImage: `url('/background/background6.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0"></div>
          {!showGift && (
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
              className="relative w-[900px] flex flex-col gap-8 items-center z-50"
            >
              {/* 🩷 Tenor GIF #1 */}
              <div
                className="tenor-gif-embed w-[200px] h-[200px]"
                data-postid="10229251508848330350"
                data-share-method="host"
                data-aspect-ratio="1.19139"
                data-width="100%"
              >
                <a href="https://tenor.com/view/kiss-gif-10229251508848330350">
                  Kiss GIF
                </a>{" "}
                from{" "}
                <a href="https://tenor.com/search/kiss-gifs">Kiss GIFs</a>
              </div>

              <div className="shadow-2xl shadow-pink-500/50 flex-1 text-center md:text-left border-4 border-pink-300 bg-white/90 backdrop-blur-lg rounded-3xl p-8 md:p-10 transform rotate-[-1deg] hover:rotate-0 transition-transform duration-300">
                <h1 className="text-2xl md:text-5xl  font-extrabold mb-3 leading-tight 
                             text-fuchsia-700 drop-shadow-md tracking-wide">
                  Happy Birthday,{" "}
                  <span className="text-pink-500">{friendName}</span> 💖
                </h1>

                <div className="text-base md:text-xl text-gray-700 mt-4 leading-relaxed font-medium">
                  {showTypewriter ? (
                    <Typewriter
                      text={`Wish you the happiest birthday, ${friendName}! May your day be filled with immense joy, endless love, and amazing surprises. You truly deserve all the happiness in the world!`}
                      speed={28}
                      className="inline-block"
                    />
                  ) : null}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center z-50">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleAudio}
                    className="px-6 py-3 bg-fuchsia-600 text-white font-semibold rounded-full 
                             shadow-lg hover:bg-fuchsia-700 transition-colors duration-200 tracking-wide flex items-center gap-2"
                  >
                    {playing ? (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Pause Music
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Play Music
                      </>
                    )}
                  </motion.button>

                  <div className="text-base text-gray-600 font-semibold italic flex items-center gap-2">
                    <span className="text-2xl animate-pulse">🎁</span> Tap the
                    gift to reveal your big surprise\!
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {showLottie && (
            <div className="pointer-events-none fixed inset-0 z-50">
              <div className="absolute top-0 left-0 right-0 flex justify-center">
                <div style={{ width: 250, height: 250 }}>
                  <Lottie
                    animationData={lottieConfetti}
                    loop={false}
                    autoplay={true}
                  />
                </div>
              </div>
            </div>
          )}

          {showGift && (
            <motion.div
              initial={{
                x: 2000,
                y: -2000,
                scale: 0.6,
                rotate: -20,
                opacity: 0,
              }}
              animate={{ x: 0, y: 0, scale: 1, rotate: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 10,
                damping: 10,
                delay: 0.2,
              }}
              className="absolute flex justify-center flex-col items-center top-[50%] right-[50%] z-[60] -translate-y-1/2 translate-x-1/2"
            >
              <div
                className="tenor-gif-embed"
                data-postid="17014314739209482783"
                data-share-method="host"
                data-aspect-ratio="1"
                data-width="100%"
              >
                <a href="https://tenor.com/view/happy-birthday-happybirthday-happy-birthday-my-love-happy-birthday-love-happy-birthday-to-you-gif-17014314739209482783">
                  Happy Birthday Sticker
                </a>{" "}
                from{" "}
                <a href="https://tenor.com/search/happy+birthday-stickers">
                  Happy Birthday Stickers
                </a>
              </div>

              <GiftBox onOpen={onOpenCarousel} />
              <div className="mt-3 text-3xl font-semibold text-white text-center drop-shadow-md bg-pink-500/80 rounded-lg py-1 px-3">
                Open me, cutie! 🥰
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
