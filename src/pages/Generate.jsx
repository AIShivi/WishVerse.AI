import React, { useState } from "react";
import html2canvas from "html2canvas";

function Generate() {
  const [prompt, setPrompt] = useState("");
  const [shayari, setShayari] = useState("");

  const handleGenerate = () => {
    if (!prompt) return;
    setShayari(`Here is a beautiful ${prompt} Shayari ❤️\n\nDil se nikli baat hai, asar zaroor karegi...`);
  };

  const handleDownload = () => {
    const node = document.getElementById("shayari-card");
    html2canvas(node).then((canvas) => {
      const link = document.createElement("a");
      link.download = "shayari.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🎨 AI Shayari Generator</h2>
      <input
        type="text"
        placeholder="Enter a theme (e.g. Love, Birthday...)"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="border p-2 rounded w-full max-w-md mb-4"
      />
      <button
        onClick={handleGenerate}
        className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
      >
        Generate Shayari
      </button>

      {shayari && (
        <div className="mt-6">
          <div id="shayari-card" className="bg-white shadow-lg rounded-xl p-6 max-w-lg mx-auto">
            <p className="text-lg whitespace-pre-line">{shayari}</p>
          </div>

          <div className="mt-4 flex justify-center gap-4">
            <button
              onClick={handleDownload}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Download Image
            </button>
            <button
              onClick={() => alert("Sharing...")}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Share
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Generate;
