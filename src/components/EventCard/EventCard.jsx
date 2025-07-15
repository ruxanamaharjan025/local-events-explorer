import React from "react";
import CategoryBadge from "./categoryBadge";

const EventCard = ({ event }) => {
  let imageSrc = `/images/${event.image}`;

  return (
    <article className="w-full h-full bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={imageSrc}
        alt={event.title}
        className="w-full h-48 object-cover mb-4 rounded-t-lg"
      />

      <div className="p-4 flex flex-col justify-between flex-grow text-left">
        <div className="mb-2">
          <CategoryBadge category={event.category} />
        </div>
        <div className="flex justify-between my-2">
          <time className="text-sm ">{event.date}</time>
          <p className="text-sm ">{event.location}</p>
        </div>
        <h3 className="text-xl font-bold my-2">{event.title}</h3>

        <p className="text-gray-700 line-clamp-3">{event.description}</p>
      </div>
    </article>
  );
};

export default EventCard;
