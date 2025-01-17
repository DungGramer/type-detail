import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import babel from 'rollup-plugin-babel';
// import polyfill from 'rollup-plugin-polyfill';
import pkg from "./package.json" assert { type: "json" };
import { terser } from "rollup-plugin-terser";

const extensions = [".js", ".ts"];

export default {
  input: "./src/index.ts",
  output: [
    { file: pkg.main, sourcemap: true, format: "cjs" },
    { file: pkg.module, sourcemap: true, format: "esm" },
  ],
  plugins: [
    resolve({ extensions, browser: true }),
    typescript({ tsconfig: "./tsconfig.json", module: "ESNext", exclude: ["**/*.spec.ts"] }),
    commonjs(),
    babel({
      extensions,
      runtimeHelpers: true,
      exclude: ["node_modules/**"],
      presets: [
        [
          "@babel/preset-env",
          {
            targets: "> 0.25%, not dead, IE 11",
            modules: false,
            spec: true,
            useBuiltIns: "usage",
            forceAllTransforms: true,
            corejs: 3,
          },
        ],
      ],
      plugins: [
        "@babel/plugin-syntax-dynamic-import",
        [
          "@babel/plugin-transform-runtime",
          {
            useESModules: true,
          },
        ],
      ],
    }),
    terser(),
  ],
};
