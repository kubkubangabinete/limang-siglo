import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  base: '/limang-siglo/',
  plugins: [react()],
  server: {
    port: Number(process.env.PORT)
  },
  define: {
    'process.env.PORT': `${process.env.PORT}`,
    'process.env.TEST': `"${process.env.TEST}"`,
  }
})