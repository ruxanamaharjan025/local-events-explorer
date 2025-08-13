import EventCard from "./EventCard";

const EventList = (events) => {
  if (!events || events.length === 0) {
    return <p>No Events Available</p>;
  }
  return (
    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      {events.events.map((event) => {
        return <EventCard key={event.id} event={event} />;
      })}
    </div>
  );
};

export default EventList;
