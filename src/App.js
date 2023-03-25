import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PublicationsPage from "./pages/PublicationsPage";
import PhotosPage from "./pages/PhotosPage";
import ContactsPage from "./pages/ContactsPage";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/publications" element={<PublicationsPage />} />
        <Route path="/photos" element={<PhotosPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
