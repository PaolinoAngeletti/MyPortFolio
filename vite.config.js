import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {

    // build save path
    outDir: '.',

    // avoid to delete my files in root before build
    emptyOutDir: false,
  },
})
