import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
    plugins: [vue()],
    css: {
        modules: {
            localsConvention: "camelCaseOnly",
        },
    },
    build: {
        target: "es2015",
        minify: "terser",
    },
    base: mode === "production" ? "" : "/",
}));
