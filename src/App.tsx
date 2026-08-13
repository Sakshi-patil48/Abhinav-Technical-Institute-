import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import AdmissionWizard from './components/AdmissionWizard';
import WhyUs from './components/WhyUs';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import AdminDashboard from './components/AdminDashboard';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Navigation Header */}
      <Navbar onAdminClick={() => setIsAdminOpen(true)} />

      {/* Main Content Layout */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <AdmissionWizard />
        <WhyUs />
        <Gallery />
        <FAQ />
        <Contact />
      </main>

      {/* Admin dashboard modal overlay */}
      <AdminDashboard isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />

      {/* Floating Interactive Widget */}
      <WhatsAppWidget />

      {/* Page Footer */}
      <Footer />
    </div>
  );
}

export default App;
