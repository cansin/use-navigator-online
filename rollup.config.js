import babel from "@rollup/plugin-babel";

import pkg from "./package.json";

export default [
  {
    input: "src/index.js",
    external: ["react"],
    output: [
      {
        globals: { react: "React" },
        name: "useNavigatorOnline",
        file: pkg.browser,
        format: "umd",
      },
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" },
    ],
    plugins: [babel({ babelHelpers: "bundled" })],
  },
];
