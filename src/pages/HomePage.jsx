import TrendingSection from "../components/home/TrendingEvents";
import CategoriesGrid from "../components/home/categoriesGrid";
import HeroSection from "../components/home/HeroSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection />

      {/* Trending Events */}
      <TrendingSection sliceStart={0} sliceEnd={3} />

      {/* Categories */}
      <CategoriesGrid />

      {/* Upcoming / This Weekend */}
      <TrendingSection sliceStart={3} sliceEnd={6} />

      {/* CTA */}
      <section className="bg-indigo-600 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">Host Your Own Event</h2>
        <p className="mb-6 text-gray-200">
          Connect with your community — share your event today.
        </p>
        <button className="bg-white text-indigo-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100">
          Submit an Event
        </button>
      </section>
    </div>
  );
}
