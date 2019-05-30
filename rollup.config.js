import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import css from 'rollup-plugin-css-only';
import autoExternal from 'rollup-plugin-auto-external';
import copy from 'rollup-plugin-copy';
import pkg from './package.json';

const commonPlugins = [
  babel(),
  autoExternal(),
  resolve(),
  css({ output: 'dist/react-draftable.css' }),
  copy({
    targets: [
      'src/react-draftable.esm.js.flow',
    ],
    outputFolder: 'dist',
  }),
];

export default [
  // browser-friendly UMD build
  {
    input: 'src/index.js',
    output: {
      name: 'react-draftable',
      file: pkg.browser,
      format: 'umd',
    },
    plugins: [
      ...commonPlugins,
      commonjs(),
    ],
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  {
    input: 'src/index.js',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    plugins: commonPlugins,
  },
];
