export interface VPNServer {
  id: string;
  country: string;
  city: string;
  flag: string;
  continent: string;
  ping: number;
  load: number;
}

export interface ConnectionStatus {
  isConnected: boolean;
  server: VPNServer | null;
  connectionTime: number;
  status: 'disconnected' | 'connecting' | 'connected' | 'reconnecting';
}

export type Theme = 'dark' | 'light';

export interface Settings {
  theme: Theme;
  killSwitch: boolean;
  dnsProtection: boolean;
  autoConnect: boolean;
  smartConnect: boolean;
}
