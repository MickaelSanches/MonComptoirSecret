import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
    output: 'static',
    integrations: [react(), tailwind()],
    build: {
        outDir: 'dist'
    }
});
