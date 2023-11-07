import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/main.ts",
      name: "qb-flip-book",
      fileName: "qb-flip-book",
      formats: ["es"],
    },
  },
});
