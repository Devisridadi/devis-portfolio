import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Stats from "@/components/portfolio/Stats";
import Projects from "@/components/portfolio/Projects";
import TechStack from "@/components/portfolio/TechStack";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Projects />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
