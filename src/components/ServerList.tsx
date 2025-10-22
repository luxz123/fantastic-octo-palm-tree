import { useState } from 'react';
import { Zap, Signal } from 'lucide-react';
import { vpnServers, getContinents, getServersByContinent, getFastestServer } from '../data/servers';
import { VPNServer } from '../types/vpn';
import { useVPN } from '../contexts/VPNContext';

export const ServerList = () => {
  const { connect, connection } = useVPN();
  const [selectedContinent, setSelectedContinent] = useState<string>('All');
  const continents = ['All', ...getContinents()];

  const getFilteredServers = (): VPNServer[] => {
    if (selectedContinent === 'All') return vpnServers;
    return getServersByContinent(selectedContinent);
  };

  const getPingColor = (ping: number) => {
    if (ping < 50) return 'text-green-400';
    if (ping < 100) return 'text-yellow-400';
    return 'text-orange-400';
  };

  const getLoadColor = (load: number) => {
    if (load < 40) return 'bg-green-500';
    if (load < 70) return 'bg-yellow-500';
    return 'bg-orange-500';
  };

  const handleSmartConnect = () => {
    const fastest = getFastestServer();
    connect(fastest);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <button
          onClick={handleSmartConnect}
          className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
        >
          <Zap className="w-5 h-5" />
          Smart Connect
          <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Fastest Server</span>
        </button>
      </div>

      <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
        {continents.map((continent) => (
          <button
            key={continent}
            onClick={() => setSelectedContinent(continent)}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
              selectedContinent === continent
                ? 'bg-blue-500 text-white shadow-lg'
                : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white'
            }`}
          >
            {continent}
          </button>
        ))}
      </div>

      <div className="space-y-2 max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-800">
        {getFilteredServers().map((server) => (
          <button
            key={server.id}
            onClick={() => connect(server)}
            disabled={connection.status === 'connecting'}
            className={`w-full bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 border border-gray-700/50 rounded-xl p-4 transition-all duration-300 group ${
              connection.server?.id === server.id ? 'ring-2 ring-blue-500 bg-blue-900/20' : ''
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-3xl">{server.flag}</span>
                <div className="text-left">
                  <p className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                    {server.country}
                  </p>
                  <p className="text-gray-400 text-sm">{server.city}</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-right">
                  <div className={`flex items-center gap-1 ${getPingColor(server.ping)}`}>
                    <Signal className="w-4 h-4" />
                    <span className="font-semibold">{server.ping}ms</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-16 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${getLoadColor(server.load)} transition-all duration-300`}
                        style={{ width: `${server.load}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-500">{server.load}%</span>
                  </div>
                </div>

                {connection.server?.id === server.id && connection.status === 'connected' && (
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
