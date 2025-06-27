import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Generate from "./pages/Generate";
import Category from "./pages/Category";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-peach-100 to-yellow-100 text-center font-sans">
        <nav className="p-4 flex justify-between items-center bg-white shadow">
          <h1 className="text-2xl font-bold text-pink-600">WishVerse.AI</h1>
          <div className="space-x-4">
            <Link to="/" className="text-gray-600 hover:text-pink-500">Home</Link>
            <Link to="/generate" className="text-gray-600 hover:text-pink-500">Generate</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate" element={<Generate />} />
          <Route path="/shayari/:category" element={<Category />} />
        </Routes>

        <footer className="mt-10 py-4 bg-white text-gray-500 text-sm">
          © 2025 WishVerse.AI • Made with ❤️ by AI
        </footer>
      </div>
    </Router>
  );
}

export default App;
