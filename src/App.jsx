import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Navbar from "./components/navbar/Navbar";
import ArtDetailPage from "./pages/ArtDetailPage";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-24 px-4 mb-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/arts/:id" element={<ArtDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
