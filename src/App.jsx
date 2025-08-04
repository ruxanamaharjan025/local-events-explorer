import { useState } from "react";
import "./App.css";
import eventsData from "./data/events.json";
import EventList from "./components/eventList";
import { FilterBar, NavBar } from "./components";

function App() {
  const [searchTitle, setSearchTitle] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredData, setFilteredData] = useState(eventsData);

  const handleTitleSearch = (e) => {
    e.preventDefault();
    const lowerTitle = searchTitle.toLowerCase();

    const filtered = eventsData.filter((event) =>
      event.title.toLowerCase().includes(lowerTitle)
    );

    setFilteredData(filtered);
  };

  const handleFilter = (e) => {
    e.preventDefault();

    const lowerCity = searchCity.toLowerCase();

    const filtered = eventsData.filter((event) => {
      const matchesCity = event.location.toLowerCase().includes(lowerCity);
      const matchesCategory = selectedCategory
        ? event.category === selectedCategory
        : true;

      return matchesCity && matchesCategory;
    });

    setFilteredData(filtered);
  };

  return (
    <div className="w-full bg-gray-200 min-h-screen font-sans">
      <NavBar
        searchTitle={searchTitle}
        setSearchTitle={setSearchTitle}
        handleTitleSearch={handleTitleSearch}
      />
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
}

export default App;
