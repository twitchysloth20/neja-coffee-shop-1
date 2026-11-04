import { defineConfig } from 'vite';
import { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
import { reactRouter } from "@react-router/dev/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    reactRouter(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
  optimizeDeps: {
    // Used by the root route. Without this Vite discovers it late and re-optimizes while the page is loaded,
    // which leaves the browser with mismatched cached modules
    include: ['react-cookie-manager'],
  },
});
