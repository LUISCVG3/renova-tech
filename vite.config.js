import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
   server: {
    // Configuración de hosts permitidos
    allowedHosts: [
      'sr4dh6-ip-189-203-84-83.tunnelmole.net',  // Asegúrate de que este sea el host correcto
      'localhost',  // Siempre permitir localhost
    ],
  },
})
