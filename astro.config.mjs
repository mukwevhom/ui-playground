import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';


import tailwindcss from '@tailwindcss/vite';


export default defineConfig({
  integrations: [
      vue(),
      react(),
      svelte(),
  ],

  vite: {
    plugins: [tailwindcss()]
  }
})