"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Typewriter from "./Typewriter";
import Timeline from "./Timeline";

const Carousel3D = dynamic(() => import("./Carousel3D"), { ssr: false });

export default function FullscreenSlide({ images = [], onClose }) {
  const [show, setShow] = useState(true);
  const [videoEnded, setVideoEnded] = useState(false);
  const [showGIFs, setShowGIFs] = useState(false);
  const [currentGIF, setCurrentGIF] = useState(0);
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [showTimeline, setShowTimeline] = useState(false);
  const videoRef = useRef(null);

  const tenorGIFs = [
    {
      postid: "24584317",
      href: "https://tenor.com/view/husband-wife-gif-24584317",
      title: "Happy Birthday Sticker",
      query: "husband-gifs",
    },
    {
      postid: "17563923400211650338",
      href: "https://tenor.com/view/hbd-gif-17563923400211650338",
      title: "Cute Couple Hug",
      query: "couple-love-gifs",
    },
    {
      postid: "11116916856125545372",
      href: "https://tenor.com/view/pengu-pudgy-penguin-pudgypenguins-happy-birthday-gif-11116916856125545372",
      title: "Birthday Cake Celebration",
      query: "birthday-cake-gifs",
    },
    {
      postid: "4232353899743732903",
      href: "https://tenor.com/view/dudu-bubu-love-gif-peachugomu-gif-4232353899743732903",
      title: "Birthday Cake Celebration",
      query: "birthday-cake-gifs",
    },
    {
      postid: "16490115244486982993",
      href: "https://tenor.com/view/cute-gif-16490115244486982993",
      title: "Birthday Cake Celebration",
      query: "birthday-cake-gifs",
    },
    {
      postid: "15115009436133024653",
      href: "https://tenor.com/view/dudu-giving-flowers-bubu-flowers-cute-sweet-i-love-you-gif-15115009436133024653",
      title: "Birthday Cake Celebration",
      query: "birthday-cake-gifs",
    },
  ];

  // ✅ Auto-play video
  useEffect(() => {
    const v = videoRef.current;
    if (v) v.play().catch(() => {});
  }, []);

  // 🎬 When video ends
  const handleVideoEnd = () => {
    setVideoEnded(true);

    // Wait for video fade out transition, then show GIFs
    setTimeout(() => {
      setShowGIFs(true);

      // 🧩 Force re-initialize Tenor after GIF mounts
      setTimeout(() => {
        const existing = document.querySelector(
          'script[src="https://tenor.com/embed.js"]'
        );
        if (existing) existing.remove();

        const script = document.createElement("script");
        script.src = "https://tenor.com/embed.js";
        script.async = true;
        script.onload = () => {
          if (window.Tenor?.init) window.Tenor.init();
        };
        document.body.appendChild(script);
      }, 500); // give React time to mount the GIF div
    }, 800); // wait for fade out transition
  };

  // 🎬 Tenor Embed Fix
  useEffect(() => {
    const existing = document.querySelector(
      'script[src="https://tenor.com/embed.js"]'
    );
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    script.onload = () => {
      if (window.Tenor?.init) window.Tenor.init();
    };
    document.body.appendChild(script);

    return () => {
      if (script && document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [currentGIF, showTypewriter]);

  const handleNextGIF = () => {
    if (currentGIF < tenorGIFs.length - 1) {
      setCurrentGIF((prev) => prev + 1);
    } else {
      setShowGIFs(false);
      setTimeout(() => setShowTypewriter(true), 400);
    }
  };

  const handlePrevGIF = () => {
    if (currentGIF > 0) setCurrentGIF((prev) => prev - 1);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-60 backdrop-blur-md flex items-center justify-center p-0 md:p-6"
        >
          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setShow(false);
              onClose && onClose();
            }}
            className="absolute top-4 right-4 z-80 bg-pink-500 text-white font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-pink-600 transition-colors"
          >
            Close ❌
          </motion.button>

          {/* Main Card */}
          <motion.div
            initial={{ y: 40, scale: 0.95 }}
            animate={{ y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
            className="relative z-70 bg-white/20 w-full h-full md:w-11/12 md:max-w-7xl md:rounded-3xl shadow-2xl shadow-pink-500/50 flex flex-col overflow-y-auto scrollbar-hide max-md:p-8"
          >
            {/* 🎥 Video Section */}
            <AnimatePresence>
              {!videoEnded && (
                <motion.div
                  key="video"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-full bg-black flex items-center justify-center rounded-2xl overflow-hidden"
                >
                  <motion.video
                    ref={videoRef}
                    src="/video/bday-video.mp4"
                    controls={false}
                    onEnded={handleVideoEnd}
                    className="w-full h-full object-contain"
                    playsInline
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* 🎁 GIF Carousel */}
            <AnimatePresence mode="wait">
              {showGIFs && !showTypewriter && !showTimeline && (
                <motion.div
                  key="gifs"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  // ENHANCEMENT: Increased vertical padding and set min-height for better centering
                  className="flex flex-col h-full items-center justify-center gap-8 p-10 min-h-[500px] bg-white/60 backdrop-blur-sm"
                >
                  <div
                    // ENHANCEMENT: Wrap the GIF in a styled container for visual separation and animation
                    className="md:w-[850px] w-full bg-white p-4 rounded-2xl shadow-2xl shadow-pink-400/50 border-4 border-pink-200"
                  >
                    <motion.div // Added Framer Motion for GIF switch animation
                      key={tenorGIFs[currentGIF].postid}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      // ENHANCEMENT: Adjusted GIF size and centered content within the container
                      className="tenor-gif-embed w-full h-[300px] md:h-[650px]  mx-auto"
                      data-postid={tenorGIFs[currentGIF].postid}
                      data-share-method="host"
                      data-aspect-ratio="1.2"
                      data-width="100%"
                    >
                      {/* Tenor embed content (left as is, as Tenor handles rendering) */}
                      <a href={tenorGIFs[currentGIF].href}>
                        {tenorGIFs[currentGIF].title}
                      </a>{" "}
                      from{" "}
                      <a
                        href={`https://tenor.com/search/${tenorGIFs[currentGIF].query}`}
                      >
                        Tenor
                      </a>
                    </motion.div>
                  </div>

                  {/* Counter */}
                  {/* <p className="text-lg font-medium text-gray-600">
                    GIF {currentGIF + 1} of {tenorGIFs.length}
                  </p> */}

                  {/* Buttons */}
                  <div className="flex items-center gap-6 mt-6">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      disabled={currentGIF === 0}
                      onClick={handlePrevGIF}
                      // ENHANCEMENT: Changed button style to use purple and added border/shadow
                      className={`px-8 py-3 rounded-full text-white font-bold text-sm md:text-lg transition-all border-2 border-white ${
                        currentGIF === 0
                          ? "bg-gray-400 cursor-not-allowed opacity-70"
                          : "bg-purple-500 hover:bg-purple-600 shadow-lg shadow-purple-500/40"
                      }`}
                    >
                      ⏪ Previous
                    </motion.button>

                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={handleNextGIF}
                      // ENHANCEMENT: Made the Next/Continue button more visually prominent (pink gradient)
                      className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 hover:from-pink-600 hover:to-fuchsia-700 text-white font-bold text-sm md:text-lg shadow-xl shadow-pink-500/50 transition-all border-2 border-white"
                    >
                      {currentGIF === tenorGIFs.length - 1
                        ? "Continue 🎉"
                        : "Next ➡️"}
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* 📝 Typewriter + Next Step */}
              {showTypewriter && !showTimeline && (
                <motion.div
                  key="typewriter"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  // ENHANCEMENT: Set a dedicated, centered background for impact
                  className="text-center space-y-10 flex flex-col items-center justify-center h-full min-h-[500px] bg-gradient-to-br from-white to-pink-50 p-10"
                >
                  <Typewriter
                    text="There are some cute memories waiting for you 💖"
                    speed={35}
                    // ENHANCEMENT: Used gradient text for high impact typography
                    className="text-3xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-500 max-w-4xl"
                  />
                  <motion.button
                    onClick={() => setShowTimeline(true)}
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.05 }}
                    // ENHANCEMENT: Large, contrasting, animated primary button
                    className="px-12 text-lg md:text-5xl py-4 bg-purple-500 text-white font-extrabold rounded-full shadow-2xl shadow-purple-500/50 hover:bg-purple-600 transition-all duration-300"
                  >
                    Show Memories 📸
                  </motion.button>
                </motion.div>
              )}

              {/* 🕰️ Timeline */}
              {showTimeline && (
                <motion.div
                  key="timeline"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  // ENHANCEMENT: Added overall padding and cleaner background
                  className="flex flex-col p-8 md:p-12 bg-white/80"
                >
                  <Timeline />

                  {/* Personalized Message Box */}
                  <div className="mt-8 w-full max-w-3xl mx-auto">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        delay: 0.5,
                        type: "spring",
                        stiffness: 100,
                      }} // Added delay and spring effect
                      // ENHANCEMENT: Added a more premium, card-like style
                      className="p-6 md:p-8 border-4 border-fuchsia-400 rounded-2xl bg-white shadow-2xl shadow-fuchsia-300/60 text-center"
                    >
                      <Typewriter
                        text="Dear cutie, every single moment with you is a priceless treasure. You make life beautiful. Always yours 💕"
                        speed={30}
                        // ENHANCEMENT: Improved font style for the personal message
                        className="text-xl md:text-2xl text-gray-800 italic font-serif"
                      />
                    </motion.div>
                  </div>

                  <div className="max-w-3xl text-center mt-12 mx-auto">
                    <Typewriter
                      text="Here's a bunch of memories — tap Private to see a special message."
                      speed={35}
                      // ENHANCEMENT: Improved color and prominence of the instruction text
                      className="text-2xl font-bold text-pink-600"
                    />
                  </div>
                  <div className="mt-8 w-fit mx-auto mb-10">
                    <motion.a
                      href="/private"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="px-10 py-5 bg-gradient-to-r from-fuchsia-600 to-pink-500 text-white font-extrabold rounded-full text-sm md:text-2xl shadow-2xl shadow-fuchsia-500/70 transition-all duration-300 transform hover:scale-[1.05] border-2 border-white">Unlock Private Message 🗝️</div>
                    </motion.a>
                  </div>
                  <div className="max-w-3xl text-center mt-12 mx-auto bg-red-500 p-2">
                    <Typewriter
                      text="This website will delete itself in 24 hours to keep your surprise safe! 🎉"
                      speed={35}
                      // ENHANCEMENT: Improved color and prominence of the instruction text
                      className="text-xl font-bold  text-white"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
