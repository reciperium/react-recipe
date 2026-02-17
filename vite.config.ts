import { resolve } from "path";
import { defineConfig } from "vite";
import wasm from "vite-plugin-wasm";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import nodeExternals from "rollup-plugin-node-externals";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    wasm(),
    dts({
      rollupTypes: true,
      tsconfigPath: "./tsconfig.app.json",
      insertTypesEntry: true,
    }),
    process.env.STORYBOOK !== "yes" && nodeExternals(),
  ],
  build: {
    target: "esnext",
    lib: {
      entry: {
        index: resolve(__dirname, "src/index.ts"),
        "index-client": resolve(__dirname, "src/index-client.ts"),
      },
      name: "ReactRecipe",
      // // the proper extensions will be added
      // fileName: 'react-recipe',
    },
    chunkSizeWarningLimit: 500,
    rollupOptions: {},
  },
});
