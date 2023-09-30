import * as esbuild from 'esbuild';

esbuild.build({
  entryPoints: ['src/clone.ts'],
  bundle: true,
  outfile: 'dist/bundle.js',
  platform: 'node',
  target: 'node14',
  loader: {
    '.node': 'copy',
  },
});
