import React from "react";
import EventCard from "./EventCard";

const EventList = (events) => {
  if (events.length === 0) {
    return <p>No Events Available</p>;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {events.events.map((event) => {
        console.log("Event:", event);
        return <EventCard key={event.id} event={event} />;
      })}
    </div>
  );
};

export default EventList;
