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
    // Used by the linked react-ui / the root route. Without this Vite discovers them late and re-optimizes
    // while the page is loaded, which leaves the browser with mismatched cached modules
    include: ['classnames', 'react-icons/fa', 'react-cookie-manager'],
  },
  resolve: {
    // The linked react-ui has its own node_modules; make it use the template's React
    dedupe: ['react', 'react-dom'],
  },
});
