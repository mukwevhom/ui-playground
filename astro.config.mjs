import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';

export default defineConfig({
    integrations: [
        vue(),
        react(),
        svelte(),
    ]
})
