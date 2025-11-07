import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ManifestOptions, VitePWA } from "vite-plugin-pwa";

const manifest: Partial<ManifestOptions> = {
  theme_color: "#7c36dd",
  background_color: "#ffffff",
  icons: [
    {
      purpose: "maskable",
      sizes: "512x512",
      src: "icon512_maskable.png",
      type: "image/png",
    },
    {
      purpose: "any",
      sizes: "512x512",
      src: "icon512_rounded.png",
      type: "image/png",
    },
  ],
  screenshots: [
    {
      src: "/screenshots/desktop.png",
      sizes: "1887x857",
      type: "image/png",
      form_factor: "wide",
    },
    {
      src: "/screenshots/mobile.png",
      sizes: "437x753",
      type: "image/png",
      form_factor: "narrow",
    },
  ],
  orientation: "any",
  display: "standalone",
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,jpg,jpeg,gif,svg}"],
      },
      manifest: manifest,
    }),
  ],
});
