import React from "react";
import { Calendar, MapPin } from "lucide-react";
import { useEventContext } from "../../context/EventContext";
import { formatDate } from "../../utils/date";

const TrendingEvents = ({ sliceStart, sliceEnd }) => {
  const { events } = useEventContext();
  return (
    <section className="max-w-6xl mx-auto py-12 px-6">
      <h2 className="text-2xl font-semibold mb-6">🔥 Trending Now</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.slice(sliceStart, sliceEnd).map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={`/images/${event.image}`}
              alt="Event"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{event.title}</h3>
              <p className="text-sm text-gray-500 flex items-center mt-2">
                <Calendar className="w-4 h-4 mr-2" />
                {formatDate(event.date)}
              </p>
              <p className="text-sm text-gray-500 flex items-center mt-1">
                <MapPin className="w-4 h-4 mr-2" /> {event.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingEvents;
