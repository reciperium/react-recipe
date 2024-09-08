import { resolve } from 'path'
import { defineConfig } from 'vite'
import wasm from "vite-plugin-wasm";
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), wasm(), dts({
    rollupTypes: true, tsconfigPath: "./tsconfig.app.json", insertTypesEntry: true,
  }),],
  build: {
    target: 'esnext',
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ReactRecipe',
      // // the proper extensions will be added
      fileName: 'react-recipe',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      // output: {
      //   // Provide global variables to use in the UMD build
      //   // for externalized deps
      //   globals: {
      //     react: 'React',
      //   },
      // },
    },
  },

})
