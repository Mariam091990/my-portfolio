
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/skill";
import Project from "./components/Project"
import Education from "./components/Education";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Achievements from "./components/achievements";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <Navbar />

      <main>
        {/* <section
          id="home"
          className="flex min-h-[80vh] items-center justify-center px-5"
        >
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-accent">
              Personal Portfolio
            </p>

            <h1 className="text-4xl font-bold text-primary md:text-6xl">
              Welcome to my portfolio
            </h1>

            <p className="mt-4 text-secondary">
              Building something meaningful with code.
            </p>
          </div>
        </section> */}
        <Hero/>
        <About/>
        <Skills/>
        <Project/>
        <Education/>
        <Experience/>
        <Services/>
        <Achievements/>
        <Contact/>
      </main>
    </>
  );
}

export default App;


// Navbar
// Current step
// Responsive navigation and mobile menu



// Hero section

// Profile image, introduction, CTA buttons and social links



// About Me

// Professional introduction and background



// Technical Skills

// Categorized technology cards and icons



// Featured Projects

// Project cards with live demos and GitHub links



// Education and Experience

// Professional timeline



// Services and Achievements

// Service cards and accomplishments



// Contact and Footer

// Contact form, social links and footer