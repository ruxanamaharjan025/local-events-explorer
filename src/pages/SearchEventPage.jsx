import { useEventContext } from "../context/EventContext";
import EventList from "../components/EventList";
import { FilterBar } from "../components/";

const SearchEventPage = () => {
  const { filteredData } = useEventContext();

  return (
    <div>
      {/* Container with Sidebar Filter and Event List */}
      <div className="flex flex-col sm:flex-row w -full px-4 py-6 gap-6">
        <FilterBar />
        {filteredData.length > 0 ? (
          <EventList events={filteredData} />
        ) : (
          <p className="text-center text-gray-500 mt-10">No events found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchEventPage;
