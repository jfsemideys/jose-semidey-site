import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? 'https://jfsemideys.github.io/jose-semidey-site/' : '/',
  plugins: [react()],
}));
 