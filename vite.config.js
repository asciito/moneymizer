import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';

export default ({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    const match = process.env.VITE_APP_URL.match('(?!(w+)\\.)\\w*(?:\\w+\\.)+\\w+');

    let HOST = match[0] ?? null;

    return defineConfig({
        plugins: [
            laravel({
                input: [
                    'resources/css/app.css',
                    'resources/js/app.js',
                ],
                refresh: true,
                valetTls: HOST,
            }),
        ],
    })
};
