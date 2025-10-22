import { Home, Server, Settings as SettingsIcon, Info } from 'lucide-react';

interface NavigationProps {
  currentView: 'home' | 'servers' | 'settings' | 'about';
  onViewChange: (view: 'home' | 'servers' | 'settings' | 'about') => void;
}

export const Navigation = ({ currentView, onViewChange }: NavigationProps) => {
  const navItems = [
    { id: 'home' as const, icon: Home, label: 'Home' },
    { id: 'servers' as const, icon: Server, label: 'Servers' },
    { id: 'settings' as const, icon: SettingsIcon, label: 'Settings' },
    { id: 'about' as const, icon: Info, label: 'About' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-900/80 backdrop-blur-lg border-t border-gray-800 z-40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-around py-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;

            return (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={`flex flex-col items-center gap-1 px-6 py-2 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'text-blue-400 bg-blue-500/10'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                <Icon className={`w-6 h-6 ${isActive ? 'animate-pulse' : ''}`} />
                <span className="text-xs font-medium">{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
