import { fileURLToPath, URL } from 'node:url'
import preact from '@preact/preset-vite'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  plugins: [
    preact({
      prerender: {
        enabled: true,
        renderTarget: '#app',
        prerenderScript: fileURLToPath(new URL('./src/prerender.tsx', import.meta.url)),
        previewMiddlewareEnabled: true,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'preact-runtime': ['preact', 'preact/hooks', 'preact/jsx-runtime'],
          'ssr-renderer': ['preact-render-to-string'],
        },
      },
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.test.{ts,tsx}'],
    css: true,
  },
})
