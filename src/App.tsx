import Cursor from './components/Cursor';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <Cursor />
      <Preloader />
      <Navbar />
      <Header />
      <main>
        <Work />
        <About />
      </main>
      <Contact />
    </>
  );
}
