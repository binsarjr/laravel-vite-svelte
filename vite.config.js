import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
    plugins: [
        // use this for creating manifest.json
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        // use this for handle svelte file
        svelte(),
    ], optimizeDeps: {
        include: [
            '@inertiajs/inertia',
            '@inertiajs/inertia-svelte',
        ]
    }
});
