import { useEffect, useState } from "react";
import "./App.css";
import eventsData from "./data/events.json";
import EventList from "./components/eventList";
import { FilterBar } from "./components";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredData, setFilteredData] = useState(eventsData);

  useEffect(() => {
    // Convert the search text to lowercase for case-insensitive comparison
    const lowerSearch = searchTerm.toLowerCase();

    // Filter events
    const filtered = eventsData.filter((event) => {
      // Check if event's location or title includes the searchTerm
      const matchesSearch =
        event.location.toLowerCase().includes(lowerSearch) ||
        event.title.toLowerCase().includes(lowerSearch);

      // Check if category matches (or skip this if no category is selected)
      const matchesCategory = selectedCategory
        ? event.category === selectedCategory
        : true;

      // Include only events that match both
      return matchesSearch && matchesCategory;
    });

    // Update the displayed list
    setFilteredData(filtered);
  }, [searchTerm, selectedCategory]); // <- re-run this code whenever these change

  return (
    <div className="bg-yellow-200 min-h-screen p-6 font-sans">
      <h1 className="text-4xl font-bold font-serif">Local Event Explorer</h1>
      <FilterBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {filteredData.length > 0 ? (
        <EventList events={filteredData} />
      ) : (
        <p className="text-center text-gray-500 mt-10">No events found.</p>
      )}
    </div>
  );
}

export default App;
