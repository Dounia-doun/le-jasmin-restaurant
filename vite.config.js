import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: [
      'sharilyn-noncompulsive-sabrina.ngrok-free.dev',
      '.ngrok-free.dev'  // Permet tous les sous-domaines ngrok
    ]
  }
})