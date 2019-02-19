import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import gzip from 'rollup-plugin-gzip';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/wframe.min.js',
    format: 'iife',
  },
  plugins: [
    resolve(),
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [
        ['@babel/env']
      ]
    }),
    uglify(),
    gzip()
  ],
};
