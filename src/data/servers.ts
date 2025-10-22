import { VPNServer } from '../types/vpn';

export const vpnServers: VPNServer[] = [
  { id: '1', country: 'Japan', city: 'Tokyo', flag: '🇯🇵', continent: 'Asia', ping: 12, load: 45 },
  { id: '2', country: 'Singapore', city: 'Singapore', flag: '🇸🇬', continent: 'Asia', ping: 8, load: 32 },
  { id: '3', country: 'South Korea', city: 'Seoul', flag: '🇰🇷', continent: 'Asia', ping: 15, load: 28 },
  { id: '4', country: 'Hong Kong', city: 'Hong Kong', flag: '🇭🇰', continent: 'Asia', ping: 10, load: 55 },
  { id: '5', country: 'India', city: 'Mumbai', flag: '🇮🇳', continent: 'Asia', ping: 25, load: 62 },
  { id: '6', country: 'Thailand', city: 'Bangkok', flag: '🇹🇭', continent: 'Asia', ping: 18, load: 48 },

  { id: '7', country: 'United States', city: 'New York', flag: '🇺🇸', continent: 'America', ping: 85, load: 42 },
  { id: '8', country: 'United States', city: 'Los Angeles', flag: '🇺🇸', continent: 'America', ping: 90, load: 38 },
  { id: '9', country: 'Canada', city: 'Toronto', flag: '🇨🇦', continent: 'America', ping: 95, load: 35 },
  { id: '10', country: 'Brazil', city: 'São Paulo', flag: '🇧🇷', continent: 'America', ping: 180, load: 58 },
  { id: '11', country: 'Mexico', city: 'Mexico City', flag: '🇲🇽', continent: 'America', ping: 120, load: 52 },

  { id: '12', country: 'United Kingdom', city: 'London', flag: '🇬🇧', continent: 'Europe', ping: 110, load: 48 },
  { id: '13', country: 'Germany', city: 'Frankfurt', flag: '🇩🇪', continent: 'Europe', ping: 115, load: 44 },
  { id: '14', country: 'France', city: 'Paris', flag: '🇫🇷', continent: 'Europe', ping: 120, load: 50 },
  { id: '15', country: 'Netherlands', city: 'Amsterdam', flag: '🇳🇱', continent: 'Europe', ping: 112, load: 42 },
  { id: '16', country: 'Switzerland', city: 'Zurich', flag: '🇨🇭', continent: 'Europe', ping: 118, load: 36 },
  { id: '17', country: 'Spain', city: 'Madrid', flag: '🇪🇸', continent: 'Europe', ping: 125, load: 46 },
  { id: '18', country: 'Italy', city: 'Milan', flag: '🇮🇹', continent: 'Europe', ping: 122, load: 52 },
  { id: '19', country: 'Sweden', city: 'Stockholm', flag: '🇸🇪', continent: 'Europe', ping: 128, load: 38 },

  { id: '20', country: 'Russia', city: 'Moscow', flag: '🇷🇺', continent: 'Europe', ping: 135, load: 54 },
  { id: '21', country: 'Turkey', city: 'Istanbul', flag: '🇹🇷', continent: 'Europe', ping: 130, load: 60 },

  { id: '22', country: 'Egypt', city: 'Cairo', flag: '🇪🇬', continent: 'Africa', ping: 145, load: 65 },
  { id: '23', country: 'South Africa', city: 'Johannesburg', flag: '🇿🇦', continent: 'Africa', ping: 195, load: 58 },
  { id: '24', country: 'Kenya', city: 'Nairobi', flag: '🇰🇪', continent: 'Africa', ping: 165, load: 62 },

  { id: '25', country: 'Australia', city: 'Sydney', flag: '🇦🇺', continent: 'Oceania', ping: 105, load: 45 },
  { id: '26', country: 'New Zealand', city: 'Auckland', flag: '🇳🇿', continent: 'Oceania', ping: 115, load: 40 },
];

export const getFastestServer = (): VPNServer => {
  return [...vpnServers].sort((a, b) => a.ping - b.ping)[0];
};

export const getServersByContinent = (continent: string): VPNServer[] => {
  return vpnServers.filter(server => server.continent === continent);
};

export const getContinents = (): string[] => {
  return Array.from(new Set(vpnServers.map(server => server.continent)));
};
