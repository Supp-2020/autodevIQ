"use client";
import { useState } from "react";
import { SuggestedQuestions } from "./SuggestedQuestions";

export const MainBody = () => {
  const [chatMessages, setChatMessages] = useState([
    {
      question: "What does App.js do?",
      answer:
        "It renders the main application content and manages the overall structure and layout.",
    },
  ]);
  return (
    <section className="w-[60%] flex flex-col gap-4">
      {chatMessages.map((msg, idx) => (
        <div
          key={idx}
          className="p-6 rounded-xl shadow-md border border-gray-300 flex flex-col gap-2"
        >
          <div className="text-gray-700 font-medium mb-1 bg-gray-100 rounded-xl p-4">
            Q: {msg.question}
          </div>
          <div className="text-gray-900 bg-gray-200 rounded-xl p-4">
            ANS: {msg.answer}
          </div>
        </div>
      ))}

      <div>
        <div className="p-6 rounded-xl shadow-md flex flex-col gap-2 border border-gray-300">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-grow border border-gray-300 rounded-lg px-4 py-3"
            />
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              Generate
            </button>
          </div>
          <SuggestedQuestions />
        </div>
      </div>
    </section>
  );
};
