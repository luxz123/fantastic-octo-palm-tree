import { useState } from 'react';
import { VPNProvider } from './contexts/VPNContext';
import { SplashScreen } from './components/SplashScreen';
import { ConnectButton } from './components/ConnectButton';
import { ServerList } from './components/ServerList';
import { Settings } from './components/Settings';
import { About } from './components/About';
import { Navigation } from './components/Navigation';
import { Shield } from 'lucide-react';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentView, setCurrentView] = useState<'home' | 'servers' | 'settings' | 'about'>('home');

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <VPNProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pb-24">
        <header className="bg-gray-900/50 backdrop-blur-lg border-b border-gray-800 sticky top-0 z-30">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  LUXZZ VPN
                </h1>
                <p className="text-[10px] text-gray-500 tracking-wider">Fast · Secure · Unlimited</p>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 py-8">
          {currentView === 'home' && (
            <div className="flex flex-col items-center justify-center min-h-[70vh]">
              <ConnectButton />
              <p className="text-gray-600 text-xs mt-12 tracking-widest">by Luxzz</p>
            </div>
          )}

          {currentView === 'servers' && <ServerList />}
          {currentView === 'settings' && <Settings />}
          {currentView === 'about' && <About />}
        </main>

        <Navigation currentView={currentView} onViewChange={setCurrentView} />
      </div>
    </VPNProvider>
  );
}

export default App;
