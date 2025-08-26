import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { useEventContext } from "../../context/EventContext";

const FilterBar = () => {
  const { applyFilters } = useEventContext();

  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");

  const handleFilter = (e) => {
    e.preventDefault();
    applyFilters(city, category);
  };

  return (
    <div className="w-full sm:w-1/4 border rounded-lg shadow-sm bg-white m-4 p-4">
      <form onSubmit={handleFilter} className="flex flex-col gap-4">
        <h3 className="text-xl text-yellow-500 font-serif font-bold">
          Filters
        </h3>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            City
          </label>
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="">All Categories</option>
            <option value="Technology">Technology</option>
            <option value="Art">Art</option>
            <option value="Music">Music</option>
            <option value="Business">Business</option>
          </select>
        </div>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
        >
          <FaFilter />
          <span>Filter</span>
        </button>
      </form>
    </div>
  );
};

export default FilterBar;
