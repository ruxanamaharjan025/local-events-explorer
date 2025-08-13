import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/bookmarks" element={<BookmarksPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
