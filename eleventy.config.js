export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("main.css");
  eleventyConfig.addPassthroughCopy({
    "node_modules/@fontsource/open-sans/files/*.woff":
      "@fontsource/open-sans/files/",
  });
  eleventyConfig.addPassthroughCopy({
    "node_modules/@fontsource/open-sans/files/*.woff2":
      "@fontsource/open-sans/files/",
  });
  eleventyConfig.addPassthroughCopy({
    "node_modules/@fontsource/open-sans/*.css": "@fontsource/open-sans/",
  });
}
