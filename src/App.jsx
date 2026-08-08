import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ServiceSection from './components/ServiceSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import CompanySection from './components/CompanySection.jsx';
import ReferenceSection from './components/ReferenceSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';
import { auditSection, economicSection, accountingSection } from './data/content.js';

function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <ServiceSection {...auditSection} />
        <ServiceSection {...economicSection} />
        <ServiceSection {...accountingSection} />
        <AboutSection />
        <CompanySection />
        <ReferenceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
