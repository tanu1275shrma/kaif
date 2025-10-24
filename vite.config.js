import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "dist", // 👈 ensures correct output folder for Vercel
  },
  server: {
    port: 5173, // optional, for local dev
  },
});
