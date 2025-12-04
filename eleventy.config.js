export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/main.css");
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

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
}
