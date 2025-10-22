import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ConnectionStatus, Settings, VPNServer } from '../types/vpn';
import { getFastestServer } from '../data/servers';

interface VPNContextType {
  connection: ConnectionStatus;
  settings: Settings;
  connect: (server?: VPNServer) => void;
  disconnect: () => void;
  updateSettings: (newSettings: Partial<Settings>) => void;
}

const VPNContext = createContext<VPNContextType | undefined>(undefined);

const defaultSettings: Settings = {
  theme: 'dark',
  killSwitch: true,
  dnsProtection: true,
  autoConnect: false,
  smartConnect: true,
};

export const VPNProvider = ({ children }: { children: ReactNode }) => {
  const [connection, setConnection] = useState<ConnectionStatus>({
    isConnected: false,
    server: null,
    connectionTime: 0,
    status: 'disconnected',
  });

  const [settings, setSettings] = useState<Settings>(() => {
    const saved = localStorage.getItem('luxzz-vpn-settings');
    return saved ? JSON.parse(saved) : defaultSettings;
  });

  useEffect(() => {
    localStorage.setItem('luxzz-vpn-settings', JSON.stringify(settings));
    document.documentElement.classList.toggle('dark', settings.theme === 'dark');
  }, [settings]);

  useEffect(() => {
    let timer: number;
    if (connection.status === 'connected') {
      timer = window.setInterval(() => {
        setConnection(prev => ({
          ...prev,
          connectionTime: prev.connectionTime + 1,
        }));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [connection.status]);

  const connect = (server?: VPNServer) => {
    const targetServer = server || (settings.smartConnect ? getFastestServer() : null);

    if (!targetServer) return;

    setConnection({
      isConnected: false,
      server: targetServer,
      connectionTime: 0,
      status: 'connecting',
    });

    setTimeout(() => {
      setConnection({
        isConnected: true,
        server: targetServer,
        connectionTime: 0,
        status: 'connected',
      });
    }, 2000);
  };

  const disconnect = () => {
    setConnection({
      isConnected: false,
      server: null,
      connectionTime: 0,
      status: 'disconnected',
    });
  };

  const updateSettings = (newSettings: Partial<Settings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  return (
    <VPNContext.Provider value={{ connection, settings, connect, disconnect, updateSettings }}>
      {children}
    </VPNContext.Provider>
  );
};

export const useVPN = () => {
  const context = useContext(VPNContext);
  if (!context) throw new Error('useVPN must be used within VPNProvider');
  return context;
};
