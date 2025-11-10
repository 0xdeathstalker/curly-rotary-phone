import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Webpack configuration for SVG imports (used with --webpack flag)
  webpack(config) {
    // Find the rule that handles SVG files
    const fileLoaderRule = config.module.rules.find(
      (rule: { test?: { test?: (str: string) => boolean } }) =>
        rule.test?.test?.(".svg"),
    );

    if (fileLoaderRule) {
      config.module.rules.push(
        // Reapply the existing rule, but only for svg imports ending in ?url
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/, // *.svg?url
        },
        // Convert all other *.svg imports to React components
        {
          test: /\.svg$/i,
          issuer: fileLoaderRule.issuer,
          resourceQuery: {
            not: [...(fileLoaderRule.resourceQuery?.not || []), /url/],
          }, // exclude if *.svg?url
          use: ["@svgr/webpack"],
        },
      );

      // Modify the file loader rule to ignore *.svg, since we have it handled now.
      fileLoaderRule.exclude = /\.svg$/i;
    }

    return config;
  },
  // Turbopack configuration placeholder (Turbopack support for SVGR is still evolving)
  // For now, use --webpack flag in dev script to use the webpack config above
  turbopack: {},
};

export default nextConfig;
