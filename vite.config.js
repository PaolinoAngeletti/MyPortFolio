import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const base = process.env.NODE_ENV === 'production' ? '/MyPortFolio/' : './'

export default defineConfig({
  plugins: [react()],
  base,
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
