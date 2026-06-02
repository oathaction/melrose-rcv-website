import { defineConfig } from "astro/config";

function removeDevToolbarOptimizeDeps() {
  return {
    name: "melrose:remove-dev-toolbar-optimize-deps",
    enforce: "post",
    configResolved(config) {
      const blockedDeps = new Set([
        "astro > aria-query",
        "astro > axobject-query",
        "astro > html-escaper",
        "astro/runtime/client/dev-toolbar/entrypoint.js",
        "astro/toolbar",
      ]);
      config.optimizeDeps.include = (config.optimizeDeps.include ?? []).filter(
        (dependency) => !blockedDeps.has(dependency),
      );
      const clientOptimizeDeps = config.environments?.client?.optimizeDeps;
      if (clientOptimizeDeps) {
        clientOptimizeDeps.include = (clientOptimizeDeps.include ?? []).filter(
          (dependency) => !blockedDeps.has(dependency),
        );
      }
    },
  };
}

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL ?? "https://melrosercv.org",
  devToolbar: {
    enabled: false,
  },
  vite: {
    plugins: [removeDevToolbarOptimizeDeps()],
  },
});
