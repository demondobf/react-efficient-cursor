import { defineConfig } from 'tsup';

export default defineConfig((options) => {
  return {
    entry: ['src/index.ts'],
    format: ['esm', 'cjs'],
    clean: true,
    dts: true,
    minify: !options.watch,
    injectStyle: true,
  };
});
