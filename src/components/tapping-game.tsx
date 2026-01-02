import { useState } from "react";
import { motion } from "framer-motion";
import "../App.css";

const reminders = [
  "You are loved.",
  "I am so proud of you.",
  "You are doing your best — and that’s enough.",
  "You matter more than you realize.",
  "It’s okay to rest.",
  "You don’t have to be perfect to be worthy.",
  "I believe in you.",
  "You’ve come so far.",
  "You are not alone.",
  "Today, you are enough."
];

export default function App() {
  const [index, setIndex] = useState(0);

  const nextReminder = () => {
    setIndex((prev) => (prev + 1) % reminders.length);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-100 p-4">
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg px-8 py-10 max-w-md w-full text-center"
      >
        <h1 className="text-sm uppercase tracking-widest text-gray-500 mb-4">
          Daily Reminder
        </h1>

        <p className="text-2xl font-medium text-gray-800 mb-8">
          {reminders[index]}
        </p>

        <button
          onClick={nextReminder}
          className="px-6 py-2 rounded-full bg-indigo-700 text-white text-sm hover:bg-indigo-800 transition"
        >
          <h4>Next reminder</h4>
        </button>
      </motion.div>
    </div>
  );
}