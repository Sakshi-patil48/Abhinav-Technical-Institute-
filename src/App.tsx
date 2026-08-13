import { useState, useEffect } from 'react';
import VerifyCertificate from './components/VerifyCertificate';
import SuperAdminDashboard from './components/SuperAdminDashboard';

function App() {
  const [currentHash, setCurrentHash] = useState<string>(
    typeof window !== 'undefined' ? window.location.hash : ''
  );

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const normalizedHash = currentHash.toLowerCase();

  // 1. Secret Super Admin Route (No UI button - accessible only via URL #super-admin)
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

  // 2. Primary Portal: Official Certificate Verification Portal
  // Extract ID if passed as ?id=..., #verify?id=..., #id=..., etc.
  let certId = '';
  if (typeof window !== 'undefined') {
    const fullSearch = window.location.search;
    const fullHash = window.location.hash;

    if (fullSearch.includes('id=')) {
      certId = new URLSearchParams(fullSearch).get('id') || '';
    } else if (fullHash.includes('id=')) {
      certId = fullHash.split('id=')[1]?.split('&')[0] || '';
    } else if (fullHash.startsWith('#verify/')) {
      certId = fullHash.replace('#verify/', '');
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-orange-500 selection:text-white">
      <main className="flex-grow">
        <VerifyCertificate initialId={certId} />
      </main>
    </div>
  );
}

export default App;
