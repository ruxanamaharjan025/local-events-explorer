import React from "react";
import { categoryStyles } from "../../constants/CategoryStyles";

const CategoriesGrid = () => {
  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Browse by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {categoryStyles.slice(0, 4).map((category, i) => (
            <button
              key={i}
              className={`bg-white shadow hover:shadow-lg rounded-2xl p-6 flex flex-col items-center text-gray-700  `}
            >
              <category.icon className="w-6 h-6" />
              <span className="mt-3 font-medium">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesGrid;
