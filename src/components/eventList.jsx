import EventCard from "./EventCard";

const EventList = ({ events, bookmarks = [], onBookmark }) => {
  if (!events || events.length === 0) {
    return <p>No Events Available</p>;
  }
  return (
    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      {events.map((event) => {
        return (
          <EventCard
            key={event.id}
            event={event}
            isBookmarked={bookmarks.includes(event.id)}
            onBookmark={onBookmark}
          />
        );
      })}
    </div>
  );
};

export default EventList;
