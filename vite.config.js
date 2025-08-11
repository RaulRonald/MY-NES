import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  const base = command === 'serve' ? '/.' : '/MY-NES/.';

  return {
    plugins: [react()],
    base: base, 
  }
})
