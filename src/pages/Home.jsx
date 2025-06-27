import React from "react";
import { Link } from "react-router-dom";

const categories = [
  { name: "Love", color: "pink-400" },
  { name: "Sad", color: "blue-400" },
  { name: "Birthday", color: "yellow-400" },
  { name: "Festival", color: "green-400" }
];

function Home() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to WishVerse.AI 🎉</h2>
      <p className="text-gray-600 mb-6">Select a category to explore beautiful Shayaris</p>

      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
        {categories.map(({ name, color }) => (
          <Link
            key={name}
            to={`/shayari/${name.toLowerCase()}`}
            className={`bg-${color} text-white py-4 rounded-2xl shadow-md text-lg font-semibold hover:scale-105 transition`}
          >
            {name}
          </Link>
        ))}
      </div>

      <div className="mt-8">
        <Link
          to="/generate"
          className="bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-purple-700 transition text-lg"
        >
          🎨 Generate Your Own Shayari
        </Link>
      </div>
    </div>
  );
}

export default Home;
