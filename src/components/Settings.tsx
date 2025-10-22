import { Moon, Sun, Shield, Globe, Zap, Power } from 'lucide-react';
import { useVPN } from '../contexts/VPNContext';

export const Settings = () => {
  const { settings, updateSettings } = useVPN();

  const toggleTheme = () => {
    updateSettings({ theme: settings.theme === 'dark' ? 'light' : 'dark' });
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <Shield className="w-6 h-6 text-blue-400" />
        Settings
      </h2>

      <div className="space-y-4">
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {settings.theme === 'dark' ? (
                <Moon className="w-5 h-5 text-blue-400" />
              ) : (
                <Sun className="w-5 h-5 text-yellow-400" />
              )}
              <div>
                <p className="text-white font-semibold">Theme</p>
                <p className="text-gray-400 text-sm">
                  {settings.theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                </p>
              </div>
            </div>
            <button
              onClick={toggleTheme}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                settings.theme === 'dark' ? 'bg-blue-500' : 'bg-gray-600'
              }`}
            >
              <span
                className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                  settings.theme === 'dark' ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Power className="w-5 h-5 text-red-400" />
              <div>
                <p className="text-white font-semibold">Kill Switch</p>
                <p className="text-gray-400 text-sm">Block internet if VPN disconnects</p>
              </div>
            </div>
            <button
              onClick={() => updateSettings({ killSwitch: !settings.killSwitch })}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                settings.killSwitch ? 'bg-blue-500' : 'bg-gray-600'
              }`}
            >
              <span
                className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                  settings.killSwitch ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-green-400" />
              <div>
                <p className="text-white font-semibold">DNS Protection</p>
                <p className="text-gray-400 text-sm">Prevent DNS leaks</p>
              </div>
            </div>
            <button
              onClick={() => updateSettings({ dnsProtection: !settings.dnsProtection })}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                settings.dnsProtection ? 'bg-blue-500' : 'bg-gray-600'
              }`}
            >
              <span
                className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                  settings.dnsProtection ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-yellow-400" />
              <div>
                <p className="text-white font-semibold">Smart Connect</p>
                <p className="text-gray-400 text-sm">Auto-select fastest server</p>
              </div>
            </div>
            <button
              onClick={() => updateSettings({ smartConnect: !settings.smartConnect })}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                settings.smartConnect ? 'bg-blue-500' : 'bg-gray-600'
              }`}
            >
              <span
                className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                  settings.smartConnect ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-xl">
        <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
          <Shield className="w-5 h-5 text-blue-400" />
          Security Features
        </h3>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
            AES-256 Encryption
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
            No-Logs Policy
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
            DNS Leak Protection
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
            Kill Switch Technology
          </li>
        </ul>
      </div>
    </div>
  );
};
