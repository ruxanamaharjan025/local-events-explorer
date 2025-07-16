import React from "react";

const FilterBar = ({
  searchterm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
      <input
        type="text"
        placeholder="Search by city/postcode"
        value={searchterm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full sm:w-1/3 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="w-full sm:w-1/3 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
      >
        <option value="">All Category</option>
        <option value="Technology">Technology</option>
        <option value="Art">Art</option>
        <option value="Music">Music</option>
        <option value="Business">Business</option>
      </select>
    </div>
  );
};

export default FilterBar;
