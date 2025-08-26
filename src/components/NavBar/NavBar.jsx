import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useEventContext } from "../../context/EventContext";

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
    <div className="flex justify-start gap-6 px-4 border border-gray-300 bg-gray-100">
      <h3 className=" py-2 text-2xl text-yellow-500 font-bold font-serif">
        Event Explorer
      </h3>

      <form
        onSubmit={handleSubmit}
        className="w-1/3 flex items-center h-10 my-2 border border-gray-300 rounded-full bg-white overflow-hidden"
      >
        <input
          type="text"
          placeholder="Search events"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-4 text-sm text-gray-700 bg-transparent focus:outline-none"
        />
        <button
          className="flex items-center justify-center px-4 h-full bg-yellow-500 text-white hover:bg-yellow-600 transition"
          type="submit"
        >
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default NavBar;
