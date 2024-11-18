import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig & { hooks?: any } = {
  appId: 'io.ionic.starter',
  appName: 'InventarioSimApp',
  webDir: 'www',
  server: {
    androidScheme: 'https',
  },
  hooks: {
    build: {
      android: 'node clean-flatdir.js',
    },
  },
};

export default config;
