import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";

// Multi Carusel import
import "react-multi-carousel/lib/styles.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Portfolio />
    </>
  );
}

export default App;
