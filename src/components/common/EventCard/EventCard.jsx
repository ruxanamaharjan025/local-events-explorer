import React, { useState, useEffect } from "react";
import CategoryBadge from "../CategoryBadge/";
import Modal from "../../Modal";
import { categoryStyles } from "../../../constants/CategoryStyles";
import { formatAbsoluteDate } from "../../../utils/date";

import { MapPin, Calendar, Bookmark, BookmarkCheck } from "lucide-react";

const EventCard = ({ event }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  let imageSrc = `/images/${event.image}`;

  const toggleBookmark = () => {
    const savedBookmarked =
      JSON.parse(localStorage.getItem("bookmarkedEvents")) || [];

    let updatedBookmarks;
    if (bookmarked) {
      updatedBookmarks = savedBookmarked.filter((e) => e.id !== event.id);
    } else {
      updatedBookmarks = [...savedBookmarked, event];
    }

    localStorage.setItem("bookmarkedEvents", JSON.stringify(updatedBookmarks));
    setBookmarked(!bookmarked);
  };

  useEffect(() => {
    const savedBookmarks =
      JSON.parse(localStorage.getItem("bookmarkedEvents")) || [];
    setBookmarked(savedBookmarks.some((e) => e.id === event.id));
  }, [event.id]);
  return (
    <>
      <article className="w-full h-full bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-300 ease-in-out overflow-hidden border border-gray-100">
        {/* Event Image */}

        <img
          src={imageSrc}
          alt={event.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-4 flex flex-col justify-between flex-grow text-left">
          {/* Category and Bookmark*/}

          <div className="flex justify-between mb-3">
            <div className="">
              <CategoryBadge
                category={categoryStyles.find((c) => c.name === event.category)}
              />
            </div>
            {/* Bookmark Button */}
            <button
              onClick={toggleBookmark}
              className="p-1text-xl"
              title={bookmarked ? "Remove Bookmark" : "Bookmark Event"}
            >
              {bookmarked ? <Bookmark /> : <BookmarkCheck />}
            </button>
          </div>
          {/* Date & Location */}
          <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
            <div className="flex items-center gap-1.5">
              <Calendar className="text-base" />
              <span className="text-sm ">{formatAbsoluteDate(event.date)}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <MapPin className=" text-base" />
              <span>{event.location}</span>
            </div>
          </div>
          {/* Event Title */}
          <h3 className="text-xl md:text-xl font-semibold text-gray-800 mb-2">
            {event.title}
          </h3>
          {/* Event Description */}
          <p
            className={`text-sm text-gray-600 text-left line-clamp-3 leading-relaxed `}
          >
            {event.description}
          </p>
          {/* Toggle Button */}
          {event.description.length > 120 && (
            <button
              onClick={() => setModalOpen(true)}
              className="text-blue-600 hover:underline text-sm self-start transition"
            >
              Read more
            </button>
          )}
          {/* 🔓 Modal for full description */}
        </div>
      </article>
      {/* 🔓 Modal for full description */}
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
        <p className="text-sm text-left text-gray-700 whitespace-pre-line">
          {event.description}
        </p>
      </Modal>
    </>
  );
};

export default EventCard;
