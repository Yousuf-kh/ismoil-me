import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Multi Carusel import
import "react-multi-carousel/lib/styles.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Kurses from "./pages/Kurses";
import About from "./pages/About";
import Service from "./pages/Service";
import Kontakt from "./pages/Kontakt";
import Kurslar from "./pages/Kurslar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kurses" element={<Kurses />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/kurslar" element={<Kurslar />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
