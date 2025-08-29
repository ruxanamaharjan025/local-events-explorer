import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEventContext } from "../../../context/EventContext";
import { Search } from "lucide-react";

const NavBar = () => {
  const { searchTitle, setSearchTitle, handleSearch } = useEventContext();
  const [input, setInput] = useState(searchTitle);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTitle(input);
    handleSearch(input);
    navigate("/searchEvents");
  };
  return (
    <div className="flex justify-between items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 shadow-md">
      {/* Logo */}
      <h3
        className="text-2xl font-bold font-serif text-white cursor-pointer"
        onClick={() => navigate("/")}
      >
        Event Explorer
      </h3>

      {/* Search */}
      <form
        onSubmit={handleSubmit}
        className="w-1/3 flex items-center h-10 border border-gray-200 rounded-full bg-white overflow-hidden shadow-sm"
      >
        <input
          type="text"
          placeholder="Search events"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-4 text-sm text-gray-700 bg-transparent focus:outline-none"
        />
        <button
          type="submit"
          className="flex items-center justify-center px-4 h-full bg-indigo-500 text-white hover:bg-indigo-600 transition"
        >
          <Search />
        </button>
      </form>
    </div>
  );
};

export default NavBar;
