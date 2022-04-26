import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import qiankun from 'vite-plugin-qiankun'
import { resolve } from 'path'
const config = defineConfig({
  resolve: {
    alias: {
      '@': resolve('src')
    }
  },
  build: {
    sourcemap: true,
    minify: false
  },
  plugins: [
    qiankun('vue3Vite', { useDevMode: true }),
    createVuePlugin({ jsx: true }),
    {
      name: 'customBlock',
      transform(code, id) {
        if (/type=custom/i.test(id)) {
          const transformedAssginment = code
            .trim()
            .replace(/export default/, 'const __customBlock =')
          return {
            code: `${transformedAssginment}
              export default function (component) {
              const options = component.options;
              if (!options.__customBlock) {
                options.__customBlock = {};
              }
              Object.assign(options.__customBlock, __customBlock);
            }`,
            map: null
          }
        }
      }
    }
  ],
  server: {
    host:true, // 暴露内网ip
    port: 6789,
    cors: true
  }
})

export default config

