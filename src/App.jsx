import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import "./App.css";

import Start from "./Components/start";
import Navbar from "./Components/navbar";
import Course from "./Components/course";
import CourseDetail from "./Components/courseDetail";
import Home from "./Components/home";
import Modesty from "./Components/modesty";
import ModestyDetails from "./Components/modestyDetails";
import Media from "./Components/media";
import Build from "./Components/build";
import About from "./Components/about";
import Contact from "./Components/contact";
import Footer from "./Components/Footer";

function AppRoutes() {
  const location = useLocation();
  const isVerseEntry = location.pathname === "/start";

  return (
    <>
      {!isVerseEntry && <Navbar />}

      <Routes>
        {/* First visit opens the cinematic entry page. */}
        <Route path="/" element={<Navigate to="/start" replace />} />
        <Route path="/start" element={<Start />} />
        <Route path="/home" element={<Home />} />

        <Route path="/course" element={<Course />} />
        <Route path="/course/:courseId" element={<CourseDetail />} />

        <Route path="/modesty" element={<Modesty />} />
   <Route path="/modesty-details/:id" element={<ModestyDetails />} />

        <Route path="/media" element={<Media />} />
        <Route path="/build" element={<Build />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Unknown paths return to the entry page instead of rendering a blank state. */}
        <Route path="*" element={<Navigate to="/start" replace />} />
      </Routes>

      {!isVerseEntry && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
