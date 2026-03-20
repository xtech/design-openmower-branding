import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Required for Docker on Windows — inotify doesn't cross the volume boundary
      usePolling: true,
      interval: 500,
    },
  },
})
