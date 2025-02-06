import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'node:path'; // ✅ Добавляем импорт

export default defineConfig({
  plugins: [vue()],
  resolve: { // ✅ Обернули alias в resolve
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
});
