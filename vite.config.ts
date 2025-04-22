import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { compression } from 'vite-plugin-compression2';
import { splitVendorChunkPlugin } from 'vite';
import imagemin from 'vite-plugin-imagemin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Only tag components in development mode
    process.env.NODE_ENV === 'development' && componentTagger(),
    // Split vendor chunks for better caching
    splitVendorChunkPlugin(),
    // Compress assets with gzip
    compression({
      include: [/\.(js|mjs|json|css|html)$/],
      threshold: 1024,
    }),
    // Compress assets with brotli (better than gzip)
    compression({
      include: [/\.(js|mjs|json|css|html)$/],
      threshold: 1024,
      algorithm: 'brotliCompress',
      filename: (filename) => `${filename}.br`,
    }),
    // Optimize images
    imagemin({
      gifsicle: {
        optimizationLevel: 3,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 80,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
            active: false,
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
  ].filter(Boolean),
  server: {
    port: 8080,
  },
  build: {
    target: 'es2015',
    cssCodeSplit: true,
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // Add more manual chunks as needed
        },
      },
    },
  },
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=31536000', // 1 year for static resources
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
