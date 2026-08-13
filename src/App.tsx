import { useState, useEffect } from 'react';
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
import SuperAdminDashboard from './components/SuperAdminDashboard';
import VerifyCertificate from './components/VerifyCertificate';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState<string>(
    typeof window !== 'undefined' ? window.location.hash : ''
  );

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      setCurrentHash(hash);
      if (hash === '#admin') {
        setIsAdminOpen(true);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);

    // Initial check
    if (window.location.hash === '#admin') {
      setIsAdminOpen(true);
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const normalizedHash = currentHash.toLowerCase();

  // 1. Secret Super Admin Console Route (#super-admin or #superadmin - Password: 9822725265)
  if (normalizedHash.startsWith('#super-admin') || normalizedHash.startsWith('#superadmin')) {
    return (
      <SuperAdminDashboard
        onBackToHome={() => {
          window.location.hash = '';
          setCurrentHash('');
        }}
      />
    );
  }

  // 2. Public Certificate Verification Portal Route (#verify or #verify?id=...)
  if (normalizedHash.startsWith('#verify')) {
    let certId = '';
    if (currentHash.includes('id=')) {
      certId = currentHash.split('id=')[1]?.split('&')[0] || '';
    } else if (currentHash.startsWith('#verify/')) {
      certId = currentHash.replace('#verify/', '');
    }

    return (
      <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-orange-500 selection:text-white">
        <Navbar onAdminClick={() => setIsAdminOpen(true)} />
        <main className="flex-grow">
          <VerifyCertificate
            initialId={certId}
            onBack={() => {
              window.location.hash = '';
              setCurrentHash('');
            }}
          />
        </main>
        <WhatsAppWidget />
        <AdminDashboard
          isOpen={isAdminOpen}
          onClose={() => {
            setIsAdminOpen(false);
            if (window.location.hash === '#admin') {
              window.location.hash = '';
            }
          }}
        />
        <Footer />
      </div>
    );
  }

  // 3. Full Modern Website Layout with all Features
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-orange-500 selection:text-white">
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

      {/* Admin Dashboard Modal */}
      <AdminDashboard
        isOpen={isAdminOpen}
        onClose={() => {
          setIsAdminOpen(false);
          if (window.location.hash === '#admin') {
            window.location.hash = '';
          }
        }}
      />

      {/* Floating Quick Action Widget */}
      <WhatsAppWidget />

      {/* Page Footer */}
      <Footer />
    </div>
  );
}

export default App;
