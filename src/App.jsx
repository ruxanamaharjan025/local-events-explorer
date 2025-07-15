import { useState } from "react";
import "./App.css";
import eventsData from "./data/events.json";
import EventList from "./components/eventList";

function App() {
  const [filteredData, setFilteredData] = useState(eventsData);
  console.log(filteredData);
  return (
    <div className="bg-yellow-200 min-h-screen p-6 font-sans">
      <h1 className="text-4xl font-bold font-serif">Local Event Explorer</h1>
      <EventList events={filteredData} />
    </div>
  );
}

export default App;
