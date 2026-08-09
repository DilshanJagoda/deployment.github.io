import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['clemmie-unsurfeited-contactually.ngrok-free.dev', '.ngrok-free.dev'],
  },
  preview: {
    allowedHosts: ['clemmie-unsurfeited-contactually.ngrok-free.dev', '.ngrok-free.dev'],
  },
})
