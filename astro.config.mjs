import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';


export default defineConfig({
    integrations: [
        tailwind(),
        vue(),
        react(),
        svelte(),
    ]
})
