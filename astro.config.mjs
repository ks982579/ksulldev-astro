import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [preact()],
  markdown: {
    remarkPlugins: [
      'remark-math',
    ],
    rehypePlugins: [
      ['rehype-katex', {
        // KaTeX plugin Options...
      }]
    ]
  }
});