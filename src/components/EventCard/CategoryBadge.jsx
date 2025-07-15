//CategoryBadge.jsx

import React from "react";

//Styles based on Category type.
const categoryStyles = {
  Technology: {
    bg: "bg-yellow-200",
    text: "text-yellow-900",
    icon: "💻",
  },
  Art: {
    bg: "bg-pink-200",
    text: "text-pink-900",
    icon: "🎨",
  },
  Music: {
    bg: "bg-green-200",
    text: "text-green-900",
    icon: "🎵",
  },
  Business: {
    bg: "bg-blue-200",
    text: "text-blue-900",
    icon: "💼",
  },
};

const CategoryBadge = ({ category }) => {
  //Fallback if category does not match.
  const { bg, text, icon } = categoryStyles[category] || {
    bg: "bg-gray-200",
    text: "text-gray-800",
    icon: "❓",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-sm font-medium ${bg} ${text}`}
    >
      {icon} {category}
    </span>
  );
};

export default CategoryBadge;
