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
      <div className="min-h-screen bg-[#aaaaab] flex justify-center py-10">
        <div className="w-full max-w-6xl bg-neutral-100 rounded-[40px] shadow-sm overflow-hidden">
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
