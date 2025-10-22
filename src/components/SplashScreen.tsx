import { useEffect, useState } from 'react';
import { Shield } from 'lucide-react';

interface SplashScreenProps {
  onFinish: () => void;
}

export const SplashScreen = ({ onFinish }: SplashScreenProps) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setFadeOut(true), 2000);
    const timer2 = setTimeout(onFinish, 2500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 bg-gradient-to-br from-gray-900 via-blue-950 to-black flex items-center justify-center z-50 transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        <div className="relative inline-block mb-6">
          <div className="absolute inset-0 animate-ping">
            <Shield className="w-24 h-24 text-blue-500 opacity-20" />
          </div>
          <Shield className="w-24 h-24 text-blue-400 relative animate-pulse drop-shadow-[0_0_30px_rgba(59,130,246,0.8)]" />
        </div>

        <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent tracking-wider">
          LUXZZ VPN
        </h1>

        <p className="text-blue-300 text-sm tracking-widest mb-8 font-light">
          Fast · Secure · Unlimited Access
        </p>

        <div className="flex items-center justify-center gap-2 mt-12">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>

        <p className="absolute bottom-8 left-0 right-0 text-center text-gray-500 text-xs tracking-widest">
          by Luxzz
        </p>
      </div>
    </div>
  );
};
