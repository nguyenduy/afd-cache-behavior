import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  // change port to 3000, build into built
  build: {
    sourcemap: true,
    outDir: "build",
  },
  server: {
    port: 3000,
  },

  plugins: [react()],
});
