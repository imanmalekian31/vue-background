import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/install.js',
  output: [
    {
      file: 'dist/bg-directive.js',
      format: 'umd',
      name: 'bgDirective',
    },
    {
      file: 'dist/bg-directive.min.js',
      format: 'umd',
      name: 'bgDirective',
      plugins: [terser()],
    },
    {
      file: 'dist/bg-directive.esm.js',
      format: 'esm',
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
  ],
};
