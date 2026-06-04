/* App — orchestrates the boot sequence and lays out the single-page sections.
 * Content lives in src/config/portfolio.config.ts; providers are wired in
 * main.tsx. */
import { useEffect, useState } from "react";
import Cursor from "./components/Cursor";
import Atmosphere from "./components/Atmosphere";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useInteractions } from "./lib/use-interactions";

export default function App() {
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("is-booting", booting);
  }, [booting]);

  useInteractions(!booting);

  return (
    <>
      <Cursor />
      <Atmosphere />
      {booting && <Preloader onDone={() => setBooting(false)} />}
      <div aria-hidden={booting}>
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Work />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
