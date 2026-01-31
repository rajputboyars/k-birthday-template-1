"use client";

import React from 'react';
import { motion } from "framer-motion";
// Ensure that the 'motion' import is used from 'framer-motion' as defined in the original code.

const timelineData = [
  {
    message: "cutie pie 😘",
    image: "/timeline/1.jpg",
  },
  {
    message: "once again cutie pie 😘",
    image: "/timeline/2.jpg",
  },
  {
    message: "ye lo fir se aagyi cutie pie 😂",
    image: "/timeline/3.jpg",
  },
  {
    message: "Kitni seedhi si dikh rahi hai, par hai nahin! 😂", // Corrected
    image: "/timeline/4.jpg",
  },
  {
    message: "My favorite picture! 😁📸", // Corrected
    image: "/timeline/8.jpg",
  },
  {
    message: "Jalwa hai humaara!", // Corrected
    image: "/timeline/9.jpg",
  },
  {
    message: "chalo ek photo ho jaye",
    image: "/timeline/12.jpg",
  },
  {
    message: `"say cheese! 🧀📸"`,
    image: "/timeline/13.jpg",
  },
  {
    message: "Itni baar bola, chalo, ek photo de deti hoon. 😂", // Corrected
    image: "/timeline/14.jpg",
  },
  {
    message: "chalo ek photo ho jaye",
    image: "/timeline/15.jpg",
  },
  {
    message: `
    Dekh kar hairaan hai aaine ka jigri,

Ek toh kaatil si nazar, uspar kaajal ka kehar..`, // Corrected
    image: "/timeline/16.jpg",
  },
  {
    message: `ye laali, ye kaajal, aur ye zulfein khuli
khuli,
arey, aise hi jaan maang lete, itne intezaam kyun kiye`,
    image: "/timeline/17.jpg",
  },
  {
    message: `Tere chehre ki wo khoobsurat tasweer kahan se lau,
Har lamha tere saath guzrey aisi takdeer kahan se lau
Main maangta hoon har safar mein saath tera,
Tu hi bata mere haathon me wo lakeer kaha se lau`,
    image: "/timeline/19.jpg",
  },
  {
    message: "Professionalism dekho! 😂", // Corrected spelling
    image: "/timeline/20.jpg",
  },
  {
    message: "My cute Panda 🐼",
    image: "/timeline/21.jpg",
  },
  {
    message: "👍👍",
    image: "/timeline/22.jpg",
  },
  {
    message: `Sitaron se bhari hovi raatein pasand hai, duur se suni uski baatein pasand hai
Tareef ke qabil hai uske baal phir bhi par, Mujhe sab se ziada uski aankhein pasand hai.`,
    image: "/timeline/23.jpg",
  },
  {
    message: `Tumse hi Ishq hona zaroori tha kya... Ye dil tumhara paband hona zaroori tha kya..
Waise to lakho log hai iss duniya me par srif tumse hi nigahein milna zaroori tha kya....`, // NEW: Beauty message 1
    image: "/timeline/25.jpg",
  },
  {
    message: "Oh God, yeh ladki kitna padhegi! 📚", // Corrected + new emoji
    image: "/timeline/26.jpg",
  },
  {
    message: `Yeh laali, yeh kaajal, bindi aur
Yeh zulfen kaali khuli khuli..
Qatl ke auzaaron ki yun khule-aam numaish nahi karte mohtarma.. 😏`, // NEW: Beauty message 4
    image: "/timeline/29.jpg",
  },
  {
    message: "🥰🥰🥰🥰🥰", // NEW: Beauty message 5
    image: "/timeline/30.jpg",
  },
  {
    message: "Oh God, itna kaam! 😫", // Corrected + new emoji
    image: "/timeline/31.jpg",
  },
  {
    message: `Uske chere pe is kadar Noor tha, Uski yaad me Hume rona manzoor tha,
Bewafa bhi nhi keh skte hum usko
Mohobbat to humne ki thi
Vo to bekasur tha`, // NEW: Beauty message 6
    image: "/timeline/32.jpg",
  },
];

// Reusable Dot Component for the timeline line
const TimelineDot = () => (
  <div className="absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-fuchsia-500 border-4 border-white shadow-xl"></div>
);

// Reusable Card Component
const TimelineItem = ({ item, index }) => {
  // Determine if the item is on the left or right side on desktop
  const isEven = index % 2 === 0;

  // Animation variants
  const variants = {
    initial: { opacity: 0, x: isEven ? -100 : 100 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className={`relative flex mb-12`}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      variants={variants}
    >
      {/* DOT (Visible on Mobile Only - Left alignment) */}
      <div className="absolute left-0 top-0 mt-3 h-full w-0.5 bg-rose-300 md:hidden">
        <div className="absolute -left-2 w-4 h-4 rounded-full bg-fuchsia-500 border-2 border-white shadow-lg"></div>
      </div>
      
      {/* Content Container */}
      <div
        className={`flex w-full ${
          isEven ? "md:justify-start" : "md:justify-end"
        }`}
      >
        {/* Message and Image Card */}
        <div
          className={`flex gap-4 flex-col md:flex-row max-w-lg w-full bg-white p-4 rounded-3xl shadow-2xl shadow-rose-200 border-2 border-rose-100 transform transition duration-300 hover:scale-[1.02] ${
            isEven ? "md:space-x-4" : "md:space-x-reverse md:space-x-4"
          }`}
        >
          {/* Image (Order changes on alternating sides) */}
          <div className={`md:w-1/2 flex-shrink-0 ${isEven ? 'order-1 md:order-2' : 'order-1'}`}>
            <img
              src={item.image}
              className="w-full h-full object-cover rounded-2xl border-4 border-fuchsia-100 shadow-md"
              alt={`Timeline photo ${index + 1}`}
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = `https://placehold.co/400x300/fecaca/9d174d?text=Missing+Image`;
              }}
            />
          </div>

          {/* Message Box (Order changes on alternating sides) */}
          <div className={`md:w-1/2 pt-4 md:pt-0 flex items-center ${isEven ? 'order-2 md:order-1' : 'order-2'}`}>
            <div className="text-center md:text-left">
              <p className="text-2xl font-semibold text-fuchsia-600 mb-1">Moment #{index + 1}</p>
              <p className="text-xl font-medium text-gray-800 leading-relaxed italic">
                {item.message}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Main Timeline Component
export default function App() {
  return (
    <div className="min-h-screen bg-rose-50 font-inter p-4 md:p-10">
      <header className="text-center py-8">
        <h1 className="text-5xl font-extrabold text-fuchsia-700 tracking-tight">
          Some Cute Moments
        </h1>
        {/* <p className="mt-2 text-xl text-rose-500 font-medium">
          हमारे सबसे प्यारे लम्हें (Our Most Cherished Moments)
        </p> */}
      </header>

      <div className="max-w-4xl mx-auto relative pt-8">
        {/* Desktop Timeline Line (Dotted style for attractiveness) */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 border-r-4 border-dashed border-rose-300"></div>

        {/* Mobile Timeline Line (Solid line on the far left) */}
        <div className="md:hidden absolute left-3.5 h-full w-0.5 bg-rose-300"></div>
        
        <div className="space-y-16">
          {timelineData.map((item, i) => (
            <div key={i} className="relative">
              {/* Timeline Item Card */}
              <TimelineItem item={item} index={i} />

              {/* Central Dot for Desktop view */}
              {/* <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <TimelineDot />
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}