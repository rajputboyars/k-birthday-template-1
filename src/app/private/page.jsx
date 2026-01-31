"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Typewriter from "@/components/Typewriter"; // use your existing Typewriter component
import confetti from "canvas-confetti";
import Link from "next/link";

export default function PrivatePage() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 500);

    // 🎉 launch confetti
    setTimeout(() => {
      confetti({
        particleCount: 250,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#ff66cc", "#ff99cc", "#ff66ff", "#fff"],
      });
    }, 800);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-white to-fuchsia-100 text-center p-8"
    >
      <motion.h1
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-500 mb-8"
      >
        💖 Private Birthday Message My Cutie💖
      </motion.h1>

      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="max-w-5xl bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl border-4 border-pink-200 p-8 md:p-10"
        >
          <Typewriter
            speed={40}
            text={`
Hey cutie pie 😍

Happy birthday my cutie pie 😍🥰

Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum doloribus recusandae ab esse est unde nesciunt eaque? Rem eius veritatis dignissimos! Soluta delectus debitis repellat in voluptatem et ea. Eveniet iure tenetur nemo consequuntur quod incidunt quae accusamus rem. Voluptatibus impedit cupiditate labore similique, veniam ducimus ipsum est dignissimos vero velit repellendus tenetur dolore at, esse sint dolores provident quos omnis quidem, sequi eius laboriosam nulla doloremque. Vitae cumque dolorem numquam, dolor exercitationem quaerat voluptatem quo maiores a nulla consequuntur. Odio fugiat aut, obcaecati blanditiis fuga animi culpa exercitationem sint illum, explicabo, modi officia non eveniet? Omnis dicta modi deserunt?
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum doloribus recusandae ab esse est unde nesciunt eaque? Rem eius veritatis dignissimos! Soluta delectus debitis repellat in voluptatem et ea. Eveniet iure tenetur nemo consequuntur quod incidunt quae accusamus rem. Voluptatibus impedit cupiditate labore similique, veniam ducimus ipsum est dignissimos vero velit repellendus tenetur dolore at, esse sint dolores provident quos omnis quidem, sequi eius laboriosam nulla doloremque. Vitae cumque dolorem numquam, dolor exercitationem quaerat voluptatem quo maiores a nulla consequuntur. Odio fugiat aut, obcaecati blanditiis fuga animi culpa exercitationem sint illum, explicabo, modi officia non eveniet? Omnis dicta modi deserunt?
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum doloribus recusandae ab esse est unde nesciunt eaque? Rem eius veritatis dignissimos! Soluta delectus debitis repellat in voluptatem et ea. Eveniet iure tenetur nemo consequuntur quod incidunt quae accusamus rem. Voluptatibus impedit cupiditate labore similique, veniam ducimus ipsum est dignissimos vero velit repellendus tenetur dolore at, esse sint dolores provident quos omnis quidem, sequi eius laboriosam nulla doloremque. Vitae cumque dolorem numquam, dolor exercitationem quaerat voluptatem quo maiores a nulla consequuntur. Odio fugiat aut, obcaecati blanditiis fuga animi culpa exercitationem sint illum, explicabo, modi officia non eveniet? Omnis dicta modi deserunt?
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum doloribus recusandae ab esse est unde nesciunt eaque? Rem eius veritatis dignissimos! Soluta delectus debitis repellat in voluptatem et ea. Eveniet iure tenetur nemo consequuntur quod incidunt quae accusamus rem. Voluptatibus impedit cupiditate labore similique, veniam ducimus ipsum est dignissimos vero velit repellendus tenetur dolore at, esse sint dolores provident quos omnis quidem, sequi eius laboriosam nulla doloremque. Vitae cumque dolorem numquam, dolor exercitationem quaerat voluptatem quo maiores a nulla consequuntur. Odio fugiat aut, obcaecati blanditiis fuga animi culpa exercitationem sint illum, explicabo, modi officia non eveniet? Omnis dicta modi deserunt?

Mera man tha ki bday apke sath hi spend kru....... but.... leave... enjoy your day...
`}
            className="text-lg md:text-2xl text-gray-800 leading-relaxed font-serif whitespace-pre-wrap"
          />
        </motion.div>
      )}
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-12"
        >
          {/* Use Link component for client-side navigation */}
          <Link href="/last-gift" passHref>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(255, 99, 172, 0.5), 0 4px 6px -2px rgba(255, 99, 172, 0.25)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 text-2xl font-bold rounded-full text-white bg-gradient-to-r from-pink-500 to-fuchsia-600 shadow-xl transition duration-300 ease-in-out"
            >
              🎁 A Last Gift For You 🎁
            </motion.button>
          </Link>
        </motion.div>
      )}
      <div className="max-w-3xl text-center mt-12 mx-auto bg-red-500 p-2 !rounded-lg overflow-hidden">
        <Typewriter
          text="This website will delete itself in 24 hours to keep your surprise safe! 🎉"
          speed={35}
          // ENHANCEMENT: Improved color and prominence of the instruction text
          className="text-xl font-bold  text-white"
        />
      </div>
    </motion.div>
  );
}
