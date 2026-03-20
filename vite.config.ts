import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Set by CI to /<repo-name>/ for GitHub Pages; defaults to / locally
  base: process.env.VITE_BASE ?? '/',
  server: {
    watch: {
      // Required for Docker on Windows — inotify doesn't cross the volume boundary
      usePolling: true,
      interval: 500,
    },
  },
})
