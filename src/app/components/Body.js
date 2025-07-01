"use client";
import { useState } from "react";

export const MainBody = () => {
  const [repoUrl, setRepoUrl] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      question: "What does App.js do?",
      answer:
        "It renders the main application content and manages the overall structure and layout.",
    },
    {
      question: "What does App.js do?",
      answer:
        "It renders the main application content and manages the overall structure and layout.",
    },
  ]);
  return (
    <section className="max-w-4xl mx-auto">
      <div className="bg-white p-6 rounded-xl shadow-md mb-8">
        <h2 className="text-lg font-semibold mb-2">Upload GitHub Repository</h2>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="https://github.com/user/repo"
            onChange={(e) => setRepoUrl(e.target.value)}
            value={repoUrl}
            className="flex-grow border border-gray-300 rounded-lg px-3 py-2"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Analyze
          </button>
        </div>
      </div>
      <hr className="bg-gray-300 my-8" />
      <div className="grid gap-6">
        {chatMessages.map((msg, idx) => (
          <div key={idx} className="bg-white p-4 rounded-xl shadow">
            <div className="text-gray-700 font-medium mb-1 bg-gray-100 rounded-xl p-4">
              Q: {msg.question}
            </div>
            <div className="text-gray-900 bg-gray-200 rounded-xl p-4">
              ANS: {msg.answer}
            </div>
          </div>
        ))}

        <div className="bg-white p-4 rounded-xl shadow flex flex-col gap-2">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-grow border border-gray-300 rounded-lg px-3 py-2"
            />
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              Generate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
