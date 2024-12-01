import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Adjust this depending on your setup (e.g., for a subpath)
  build: {
    outDir: 'dist', // Ensure that the build output is going to the correct directory
  },
  plugins: [react()],
  server: {
    proxy: {
      "/backend": "http://localhost:3000"
    }
  }
})
