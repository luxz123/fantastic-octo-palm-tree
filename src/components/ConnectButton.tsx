import { Power } from 'lucide-react';
import { useVPN } from '../contexts/VPNContext';

export const ConnectButton = () => {
  const { connection, connect, disconnect } = useVPN();

  const handleClick = () => {
    if (connection.isConnected) {
      disconnect();
    } else {
      connect();
    }
  };

  const getButtonStyle = () => {
    if (connection.status === 'connected') {
      return 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 shadow-[0_0_40px_rgba(34,197,94,0.4)]';
    }
    if (connection.status === 'connecting' || connection.status === 'reconnecting') {
      return 'bg-gradient-to-r from-yellow-500 to-orange-500 shadow-[0_0_40px_rgba(234,179,8,0.4)] animate-pulse';
    }
    return 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-[0_0_40px_rgba(59,130,246,0.4)]';
  };

  const getStatusText = () => {
    switch (connection.status) {
      case 'connected':
        return "You're protected!";
      case 'connecting':
        return 'Connecting...';
      case 'reconnecting':
        return 'Reconnecting...';
      default:
        return 'Tap to connect';
    }
  };

  return (
    <div className="flex flex-col items-center">
      <p className="text-gray-400 dark:text-gray-300 mb-6 text-sm tracking-wide">
        {getStatusText()}
      </p>

      <button
        onClick={handleClick}
        disabled={connection.status === 'connecting' || connection.status === 'reconnecting'}
        className={`w-48 h-48 rounded-full ${getButtonStyle()} flex items-center justify-center transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-80`}
      >
        <Power
          className={`w-20 h-20 text-white ${
            connection.status === 'connecting' || connection.status === 'reconnecting'
              ? 'animate-spin'
              : ''
          }`}
        />
      </button>

      {connection.server && (
        <div className="mt-8 text-center">
          <p className="text-2xl mb-2">
            {connection.server.flag}
          </p>
          <p className="text-white font-semibold text-lg">
            {connection.server.country}
          </p>
          <p className="text-gray-400 text-sm">
            {connection.server.city}
          </p>
          {connection.status === 'connected' && (
            <div className="mt-4 flex items-center justify-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                {connection.server.ping}ms
              </span>
              <span>•</span>
              <span>AES-256</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
