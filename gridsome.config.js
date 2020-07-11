// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Nilay Shah Portfolio",
  siteDescription: "Dr. Nilay Shah Portfolio",
  siteUrl: "https://nilay-shah.netlify.com",
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
    },
    {
      use: "@gridsome/vue-remark",
      options: {
        typeName: "Documentation", // Required
        baseDir: "./docs", // Where .md files are located
        pathPrefix: "/docs", // Add route prefix. Optional
        template: "./src/templates/Documentation.vue", // Optional
        plugins: [
          [
            "gridsome-plugin-remark-shiki",
            { theme: "Material-Theme-Palenight", skipInline: true },
          ],
        ],
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/**/*.md",
        typeName: "Post",
        refs: {
          tags: {
            typeName: "Tag",
            create: true,
          },
        },
      },
    },
    {
      use: "gridsome-plugin-rss",
      options: {
        contentTypeName: "Post",
        feedOptions: {
          title: "Gridsome Portfolio Starter Blog",
          feed_url: "https://nilay-shah.com/rss.xml",
          site_url: "nilay-shah.netlify.com/",
        },
        feedItemOptions: (node) => ({
          title: node.title,
          description: node.summary,
          url: "https://nilay-shah.netlify.com" + node.path,
          author: "Abhishek Patel",
          date: node.date,
        }),
        output: {
          dir: "./static",
          name: "rss.xml",
        },
      },
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000, // default
      },
    },
  ],
  templates: {
    Tag: "/tag/:id",
  },
  transformers: {
    remark: {
      plugins: [
        [
          "gridsome-plugin-remark-shiki",
          { theme: "Material-Theme-Palenight", skipInline: true },
        ],
      ],
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
    },
  },
};
