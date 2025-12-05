import {defineConfig} from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import glsl from "vite-plugin-glsl";
import rehypeKatex from 'rehype-katex'; // relevant
import remarkMath from 'remark-math';   // relevant
import {remarkReadingTime} from "./src/utils/remark-reading-time.mjs";

import rehypePrettyCode from "rehype-pretty-code";

import react from "@astrojs/react";

/**
 *  rehypePrettyCode based on shiki
 */
// https://astro.build/config
export default defineConfig({
  base: '/blog',
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
    mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [
        rehypeKatex,
        [
          rehypePrettyCode,
          {
            theme: "dracula",
            onVisitHighlightedLine(node) {
              // node.properties.className.push('highlighted');
            },
            onVisitHighlightedWord(node) {
              // node.properties.className = ['word'];
            },
          },
        ],
      ],
    }),
    react({
      include: ["**/react/*"],
    }),
  ],
  markdown: {
    syntaxHighlight: false,
    // remarkPlugins: [remarkReadingTime],
    remarkPlugins: [],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "dracula",
          onVisitHighlightedLine(node) {
            // node.properties.className.push('highlighted');
          },
          onVisitHighlightedWord(node) {
            // node.properties.className = ['word'];
          },
        },
      ],
    ],
    extendDefaultPlugins: true,
  },
  vite: {
    server: {
      watch: {
        ignored: ['**/.idea/workspace.xml']
      }
    },
    plugins: [
      // https://www.npmjs.com/package/vite-plugin-glsl
      glsl({
        include: [
          // Glob pattern, or array of glob patterns to import
          "**/*.glsl",
          "**/*.wgsl",
          "**/*.vert",
          "**/*.frag",
          "**/*.vs",
          "**/*.fs",
        ],
        exclude: undefined, // Glob pattern, or array of glob patterns to ignore
        warnDuplicatedImports: true, // Warn if the same chunk was imported multiple times
        defaultExtension: "glsl", // Shader suffix when no extension is specified
        compress: false, // Compress output shader code
        watch: true, // Recompile shader on change
        root: "/", // Directory for root imports
      }),
    ],
  },
});
