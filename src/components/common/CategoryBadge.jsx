//CategoryBadge.jsx

import React from "react";
import { CircleQuestionMark } from "lucide-react";

const CategoryBadge = ({ category }) => {
  //Fallback if category does not match.
  const {
    name,

    icon: Icon,
  } = category || {
    name: "Unknown",
    bg: "bg-gray-200",
    text: "text-gray-800",
    icon: CircleQuestionMark,
  };
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500 to-indigo-500 text-white`}
    >
      <Icon className="w-4 h-4" />
      {name}
    </span>
  );
};

export default CategoryBadge;
