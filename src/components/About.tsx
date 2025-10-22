import { Shield, Lock, Globe, Zap, Eye, Server } from 'lucide-react';

export const About = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="text-center mb-8">
        <div className="inline-block mb-4">
          <Shield className="w-16 h-16 text-blue-400 drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]" />
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
          LUXZZ VPN
        </h1>
        <p className="text-blue-300 tracking-widest text-sm">
          Fast · Secure · Unlimited Access
        </p>
        <p className="text-gray-500 text-xs mt-2">Version 1.0.0</p>
      </div>

      <div className="space-y-4 mb-8">
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-5">
          <div className="flex items-start gap-3">
            <Zap className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-white font-semibold mb-1">Lightning Fast</h3>
              <p className="text-gray-400 text-sm">
                Connect to servers worldwide with minimal latency. Smart routing ensures optimal speed.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-5">
          <div className="flex items-start gap-3">
            <Lock className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-white font-semibold mb-1">Military-Grade Encryption</h3>
              <p className="text-gray-400 text-sm">
                Your data is protected with AES-256 encryption, the same standard used by governments.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-5">
          <div className="flex items-start gap-3">
            <Eye className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-white font-semibold mb-1">No-Logs Policy</h3>
              <p className="text-gray-400 text-sm">
                We don't track, collect, or store your browsing activity. Your privacy is guaranteed.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-5">
          <div className="flex items-start gap-3">
            <Server className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-white font-semibold mb-1">Global Server Network</h3>
              <p className="text-gray-400 text-sm">
                Access 26+ servers across Asia, Europe, America, Africa, and Oceania.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-5">
          <div className="flex items-start gap-3">
            <Globe className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-white font-semibold mb-1">No Limits</h3>
              <p className="text-gray-400 text-sm">
                No ads, no registration, no bandwidth limits. Just pure, unrestricted access.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-xl p-6 text-center">
        <p className="text-gray-400 text-sm mb-4">
          LUXZZ VPN is committed to protecting your online privacy and security without compromise.
        </p>
        <p className="text-blue-400 font-semibold text-sm">
          No Registration · No Ads · No Tracking
        </p>
      </div>

      <div className="text-center mt-8">
        <p className="text-gray-500 text-xs tracking-widest">
          Created by Luxzz
        </p>
      </div>
    </div>
  );
};
