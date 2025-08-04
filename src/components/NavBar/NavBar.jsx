import { FaSearch } from "react-icons/fa";

const NavBar = ({ searchTitle, setSearchTitle, handleTitleSearch }) => {
  return (
    <div className="flex justify-start gap-6 px-4 border border-gray-300 bg-gray-100">
      <h3 className=" py-2 text-2xl text-yellow-500 font-bold font-serif">
        Event Explorer
      </h3>

      <form
        onSubmit={handleTitleSearch}
        className="w-1/3 flex items-center h-10 my-2 border border-gray-300 rounded-full bg-white overflow-hidden"
      >
        <input
          type="text"
          placeholder="Search events"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
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
