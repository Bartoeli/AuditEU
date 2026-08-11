import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import AboutSection from "./components/AboutSection.jsx";
import CompanySection from "./components/CompanySection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <CompanySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
