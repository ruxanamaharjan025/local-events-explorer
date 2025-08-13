import { useOutletContext } from "react-router-dom";
import EventList from "../components/eventList";
import { FilterBar } from "../components/";

const HomePage = () => {
  const {
    searchCity,
    setSearchCity,
    selectedCategory,
    setSelectedCategory,
    filteredData,
    handleFilter,
  } = useOutletContext();

  return (
    <div>
      {/* Container with Sidebar Filter and Event List */}
      <div className="flex flex-col sm:flex-row w-full px-4 py-6 gap-6">
        <FilterBar
          searchCity={searchCity}
          setSearchCity={setSearchCity}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          handleFilter={handleFilter}
        />
        {filteredData.length > 0 ? (
          <EventList events={filteredData} />
        ) : (
          <p className="text-center text-gray-500 mt-10">No events found.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
