"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Zap, Heart, CheckCircle, XCircle, ArrowRight } from "lucide-react";

// --- Secret Answer Key ---
const SECRET_ANSWERS = {
  color: "Fuchsia",
  song: "Tujh Mein Rab Dikhta Hai",
  food: "Pizza",
  dessert: "Gulab Jamun",
  movieGenre: "Romance",
};

// --- Options for Each Field ---
const OPTIONS = {
  color: ["Pink", "Blue", "Fuchsia", "Black", "Yellow", "Purple"],
  song: [
    "Tujh Mein Rab Dikhta Hai",
    "Tum Hi Ho",
    "Perfect - Ed Sheeran",
    "Apna Bana Le",
    "Raabta",
  ],
  food: ["Pizza", "Burger", "Pasta", "Biryani", "Momos"],
  dessert: ["Cake", "Ice Cream", "Gulab Jamun", "Rasmalai", "Brownie"],
  movieGenre: ["Romance", "Comedy", "Thriller", "Action", "Horror"],
};

const formFields = [
  { id: "color", label: "Favourite Color 🎨" },
  { id: "song", label: "Favourite Song 🎶" },
  { id: "food", label: "Favourite Food 🍕" },
  { id: "dessert", label: "Favourite Dessert 🍧" },
  { id: "movieGenre", label: "Favourite Movie Genre 🎬" },
];

const InitialState = formFields.reduce(
  (acc, field) => ({ ...acc, [field.id]: "" }),
  {}
);

// --- Scoring Logic ---
const calculateScore = (userAnswers) => {
  let score = 0;
  const results = [];
  const totalQuestions = formFields.length;

  for (const field of formFields) {
    const userAnswer = userAnswers[field.id].trim().toLowerCase();
    const secretAnswer = SECRET_ANSWERS[field.id].toLowerCase();
    const isMatch = userAnswer === secretAnswer;
    if (isMatch) score++;

    results.push({
      fieldId: field.id,
      label: field.label,
      userAnswer: userAnswers[field.id],
      secretAnswer: SECRET_ANSWERS[field.id],
      isCorrect: isMatch,
    });
  }

  return { score, totalQuestions, results };
};

// --- Form Component ---
const FavoritesForm = ({ answers, setAnswers, handleSubmit }) => {
  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  return (
    <motion.div
      className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl shadow-fuchsia-300 border-4 border-fuchsia-100 max-w-lg w-full mx-auto"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {formFields.map((field) => (
          <motion.div
            key={field.id}
            className="group"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <label
              htmlFor={field.id}
              className="block text-sm font-bold text-fuchsia-600 mb-1"
            >
              {field.label}
            </label>
            <select
              id={field.id}
              name={field.id}
              value={answers[field.id]}
              onChange={handleChange}
              required
              className="w-full p-3 border-2 border-rose-300 rounded-xl focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-100 transition duration-200 outline-none text-gray-700"
            >
              <option value="">Select an option...</option>
              {OPTIONS[field.id].map((option, i) => (
                <option key={i} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </motion.div>
        ))}

        <motion.button
          type="submit"
          className="w-full flex items-center justify-center space-x-2 p-3 mt-8 bg-fuchsia-600 text-white font-bold rounded-full shadow-lg hover:bg-fuchsia-700 transition duration-300 transform hover:scale-[1.03] active:scale-95"
          whileTap={{ scale: 0.95 }}
        >
          <Heart className="w-5 h-5 fill-white" />
          <span>Submit Your Favorites!</span>
        </motion.button>
      </form>
    </motion.div>
  );
};

// --- Scorecard Component ---
const Scorecard = ({ scoreData, handleReset, onNextClick }) => {
  const { score, totalQuestions, results } = scoreData;
  const percentage = Math.round((score / totalQuestions) * 100);

  const getMessage = () => {
    if (percentage === 100) return "PERFECT MATCH! You know me better than anyone! ❤️";
    if (percentage >= 60) return "Awesome! You know me so well! 😉";
    if (percentage >= 30) return "Not bad! But you still have more to learn about me. 😊";
    return "Time for a study session! Let's talk more! 🙈";
  };

  return (
    <motion.div
      className="bg-white p-6 md:p-8 rounded-3xl shadow-2xl shadow-rose-300 border-4 border-rose-100 max-w-2xl w-full mx-auto"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }}
    >
      <h2 className="text-3xl font-extrabold text-center text-fuchsia-700 mb-4 flex items-center justify-center">
        <Zap className="w-6 h-6 mr-2" />
        Scorecard
      </h2>

      <div className="text-center mb-6 p-4 bg-fuchsia-50 rounded-xl border border-fuchsia-200">
        <p className="text-4xl font-black text-fuchsia-600 mb-2">
          {score} / {totalQuestions} ({percentage}%)
        </p>
        <p className="text-xl font-semibold text-gray-700 italic">{getMessage()}</p>
      </div>

      <div className="overflow-x-auto mb-6">
        <table className="min-w-full divide-y divide-rose-200 border border-rose-200 rounded-xl">
          <thead className="bg-rose-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-rose-700 uppercase tracking-wider rounded-tl-xl">
                Category
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-rose-700 uppercase tracking-wider">
                Your Guess
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-rose-700 uppercase tracking-wider">
                My Secret Fave
              </th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-rose-700 uppercase tracking-wider rounded-tr-xl">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-rose-100">
            {results.map((result) => (
              <tr
                key={result.fieldId}
                className={result.isCorrect ? "bg-fuchsia-50" : "hover:bg-rose-50"}
              >
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-fuchsia-600">
                  {result.label.split(" ")[1]}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 font-semibold">
                  {result.userAnswer || "N/A"}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600 italic">
                  {result.secretAnswer}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-center">
                  {result.isCorrect ? (
                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500 mx-auto" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ Next Button */}
      <motion.button
        onClick={onNextClick}
        whileTap={{ scale: 0.95 }}
        className="w-full flex items-center justify-center space-x-2 p-3 mt-4 bg-pink-500 text-white font-bold rounded-full shadow-lg hover:bg-pink-600 transition duration-300 transform hover:scale-[1.03] active:scale-95"
      >
        <span>Next</span>
        <ArrowRight className="w-5 h-5" />
      </motion.button>
    </motion.div>
  );
};

// --- Main Component ---
export default function Favorites({ onComplete, onNextClick }) {
  const [answers, setAnswers] = useState(InitialState);
  const [scoreData, setScoreData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const scoreResult = calculateScore(answers);
    setScoreData(scoreResult);
    if (onComplete) onComplete(scoreResult);
  };

  const handleReset = () => {
    setAnswers(InitialState);
    setScoreData(null);
  };

  return (
    <div className="min-h-screen bg-rose-50 font-inter p-4 md:p-10 flex flex-col items-center justify-center">
      <header className="text-center py-8 mb-6">
        <h1 className="text-5xl font-extrabold text-fuchsia-700 tracking-tight">
          How Well Do You Know Me? 😉
        </h1>
        <p className="mt-2 text-xl text-rose-500 font-medium">
          Choose your answers carefully!
        </p>
      </header>

      <motion.div
        className="w-full"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {scoreData ? (
          <Scorecard
            scoreData={scoreData}
            handleReset={handleReset}
            onNextClick={onNextClick}
          />
        ) : (
          <FavoritesForm
            answers={answers}
            setAnswers={setAnswers}
            handleSubmit={handleSubmit}
          />
        )}
      </motion.div>
    </div>
  );
}
