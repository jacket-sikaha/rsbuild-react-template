import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [pluginReact({})],
  // performance: {
  //   chunkSplit: {
  //     strategy: "split-by-module",
  //   },
  // },

  // server: {
  // port: 3000,
  // },
});
