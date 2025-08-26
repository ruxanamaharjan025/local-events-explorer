import React, { useState, useEffect } from "react";
import { EventContext } from "../context/EventContext";

export const EventProvider = ({ children }) => {
  const [searchTitle, setSearchTitle] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [events, setEventData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Bookmarks state with localStorage persistence
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem("bookmarkedEvents");
    return saved ? JSON.parse(saved) : [];
  });

  //Fetch events fron json-server
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5001/events")
      .then((response) =>
        response.json().then((data) => {
          setEventData(data);
          setFilteredData(data);
          setLoading(false);
        })
      )
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    localStorage.setItem("bookmarkedEvents", JSON.stringify(bookmarks));
  }, [bookmarks]);

  // Filtering logic
  const applyFilters = (city, category) => {
    const lowerTitle = searchTitle.toLowerCase();
    const lowerCity = city.toLowerCase();

    const filtered = events.filter((event) => {
      const matchesTitle = event.title.toLowerCase().includes(lowerTitle);
      const matchesCity = event.location.toLowerCase().includes(lowerCity);
      const matchesCategory = category ? event.category === category : true;
      return matchesTitle && matchesCity && matchesCategory;
    });

    setFilteredData(filtered);
  };
  console.log("Filtered Data:", filteredData);
  // Handlers

  const handleBookmark = (eventId) => {
    setBookmarks((prev) =>
      prev.includes(eventId)
        ? prev.filter((id) => id !== eventId)
        : [...prev, eventId]
    );
  };

  const handleSearch = (searchTitle) => {
    const filtered = events.filter((event) =>
      event.title.toLowerCase().includes(searchTitle.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <EventContext.Provider
      value={{
        searchTitle,
        setSearchTitle,
        handleSearch,
        filteredData,
        loading,
        applyFilters,
        bookmarks,
        handleBookmark,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
