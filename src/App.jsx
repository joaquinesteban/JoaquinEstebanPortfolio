import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div className="min-h-screen bg-[#aaaaab] flex justify-center md:py-10">
        <div className="w-full bg-[#f5f5f5] overflow-hidden md:max-w-6xl md:mx-auto md:bg-neutral-100 md:rounded-[40px] md:shadow-sm">
          <Header />
          <main>
            <Hero />
            <Projects />
            <About />
            <Contact />
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
