import React from "react";
import { useParams, Link } from "react-router-dom";

const mockData = {
  love: [
    "Pyar mein junoon hai, dard bhi hai...",
    "Tumse milkar zindagi khubsurat lagti hai."
  ],
  sad: [
    "Aansoon bhi kabhi muskara lete hain...",
    "Tanhaaiyon mein bhi teri yaadein saath hain."
  ],
  birthday: [
    "Janmadin ki dheron shubhkamnayein!",
    "Khushiyo se bhara ho tera har din."
  ],
  festival: [
    "Diwali ki roshni se jagmaga uthho!",
    "Eid mubarak ho aapko aur aapke parivaar ko."
  ]
};

function Category() {
  const { category } = useParams();
  const items = mockData[category] || [];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 capitalize">✨ {category} Shayari</h2>

      <div className="grid gap-4 max-w-xl mx-auto">
        {items.map((text, idx) => (
          <div key={idx} className="bg-white p-4 rounded-xl shadow">
            <p className="text-gray-800">{text}</p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <Link to="/" className="text-blue-500 hover:underline">← Back to Home</Link>
      </div>
    </div>
  );
}

export default Category;
