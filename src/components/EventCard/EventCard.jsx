import React from "react";
import CategoryBadge from "./categoryBadge";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const EventCard = ({ event }) => {
  let imageSrc = `/images/${event.image}`;

  return (
    <article className="w-full h-full bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-300 ease-in-out overflow-hidden border border-gray-100">
      {/* Event Image */}

      <img
        src={imageSrc}
        alt={event.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4 flex flex-col justify-between flex-grow text-left">
        {/* Category */}
        <div className="mb-3">
          <CategoryBadge category={event.category} />
        </div>
        {/* Date & Location */}
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1.5">
            <FaCalendarAlt className=" text-green-600 text-base" />
            <span className="text-sm ">{event.date}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <FaMapMarkerAlt className=" text-blue-500 text-base" />
            <span>{event.location}</span>
          </div>
        </div>
        {/* Event Title */}
        <h3 className="text-xl md:text-xl font-semibold text-gray-800 mb-2">
          {event.title}
        </h3>
        {/* Event Description */}
        <p className="text-sm text-gray-600 text-left line-clamp-3 leading-relaxed">
          {event.description}
        </p>
      </div>
    </article>
  );
};

export default EventCard;
