// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  // Base URL: '/' en local, '/nombre-repo/' en GitHub Pages
  // Se configura con variable de entorno: VITE_BASE=/F3-8.02/ npm run build
  base: process.env.VITE_BASE || '/',

  // Vite usa index.html como entry point automáticamente
  root: '.',

  // Servidor de desarrollo
  server: {
    port: 3000,
    open: true,
    // Sirve archivos estáticos del proyecto (PDFs, etc.)
    fs: {
      strict: false
    }
  },

  // Configuración de build para producción
  build: {
    outDir: 'dist',
    // Limpia dist antes de cada build
    emptyOutDir: true,

    rollupOptions: {
      output: {
        // Separar data.js (87KB) en su propio chunk → carga paralela
        manualChunks(id) {
          if (id.includes('src/js/data.js')) return 'data';
        },
        // Nombres con hash para cache-busting
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },

    // Umbral de advertencia de chunk (data.js es ~87KB, es esperado)
    chunkSizeWarningLimit: 200,

    // Minificación con oxc (nativo en Vite 8, sin dependencia extra)
    minify: 'oxc',

    // Source maps para debug en producción (opcional, quitar en deploy final)
    sourcemap: false
  },

  // CSS: procesado automáticamente, sin configuración extra necesaria
  css: {
    devSourcemap: true
  }
});
