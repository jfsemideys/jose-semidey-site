import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? 'https://jfsemideys.github.io/jose-semidey-site/' : '/',
  plugins: [react()],
})
 