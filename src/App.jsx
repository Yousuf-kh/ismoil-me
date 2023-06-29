import Hero from "./components/Hero";
import Kurs from "./components/Kurs";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import WhoIs from "./components/whoIs";
import Lessons from "./components/lessons";

// Multi Carusel import
import "react-multi-carousel/lib/styles.css";
import Course from "./components/Course";
import Sale from "./components/Sale";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Portfolio />
      <Kurs />
      <WhoIs />
      <Lessons />
      <Course />
      <Sale />
    </>
  );
}

export default App;
