"use client";
import React, { useState } from "react";

const Result = ({ onGoBack, matchRate, title, suggestions }) => {
  const [, setShowForm] = useState(false);

  const handleGoBack = () => {
    setShowForm(true);
    onGoBack();
  };

  const getColorClass = () => {
    if (matchRate >= 50) {
      return "text-green-600"; // Tailwind text color class
    } else if (matchRate >= 30) {
      return "text-yellow-500"; // Tailwind text color class
    } else {
      return "text-red-600"; // Tailwind text color class
    }
  };

  const getMatchingSuggestions = () => {
    return (
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {suggestions.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="py-10 px-4 flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow">
        <h3 className="text-2xl font-bold text-center mb-4">
          Result - Match Rate:
        </h3>
        <h2
          className={`text-center text-5xl font-extrabold mb-4 ${getColorClass()}`}
        >
          {matchRate}%
        </h2>
        <hr className="my-6 border-gray-300" />
        {getMatchingSuggestions()}
      </div>

      <button
        onClick={handleGoBack}
        className="mt-8 inline-flex items-center gap-2 px-5 py-3 bg-black text-white rounded hover:bg-gray-800 transition"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Go Back
      </button>
    </div>
  );
};

export default Result;
