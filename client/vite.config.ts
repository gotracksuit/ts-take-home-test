import deno from "@deno/vite-plugin";
import { Port } from "@suittracker/lib";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const env = {
  clientPort: Port.parse(Deno.env.get("CLIENT_PORT")),
  servereBaseUrl: String(Deno.env.get("SERVER_BASE_URL")),
  serverPort: Port.parse(Deno.env.get("SERVER_PORT")),
};

export default defineConfig({
  root: "src",
  plugins: [react(), deno()],
  server: {
    port: env.clientPort,
    proxy: {
      "/api": {
        target: `${env.servereBaseUrl}:${env.serverPort}`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
