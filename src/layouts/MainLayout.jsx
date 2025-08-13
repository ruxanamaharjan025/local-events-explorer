import { useState } from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components";
import eventsData from "../data/events.json";

const MainLayout = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredData, setFilteredData] = useState(eventsData);

  const applyFilters = () => {
    const lowerTitle = searchTitle.toLowerCase();
    const lowerCity = searchCity.toLowerCase();

    const filtered = eventsData.filter((event) => {
      const matchesTitle = event.title.toLowerCase().includes(lowerTitle);
      const matchesCity = event.location.toLowerCase().includes(lowerCity);
      const matchesCategory = selectedCategory
        ? event.category === selectedCategory
        : true;

      return matchesTitle && matchesCity && matchesCategory;
    });

    setFilteredData(filtered);
  };

  const handleTitleSearch = (e) => {
    e.preventDefault();
    applyFilters();
  };

  const handleFilter = (e) => {
    e.preventDefault();

    applyFilters();
  };

  return (
    <div className="w-full bg-gray-200 min-h-screen font-sans">
      <NavBar
        searchTitle={searchTitle}
        setSearchTitle={setSearchTitle}
        handleTitleSearch={handleTitleSearch}
      />
      <Outlet
        context={{
          searchCity,
          setSearchCity,
          selectedCategory,
          setSelectedCategory,
          filteredData,
          handleFilter,
        }}
      />
    </div>
  );
};

export default MainLayout;
