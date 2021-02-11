module.exports = {
  siteMetadata: {
    title: `Kiviro by Vedant Suryawanshi`,
    name: `Kiviro`,
    siteUrl: `https://kiviro.in`,
    description: `Documenting Vedant Suryawanshi's life.`,
    hero: {
      heading: `There’s a saying that when it gets really tough and when you’re about to give up, that’s the time when you’re about to reap the results you want.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/vedantsurya`,
      },
      {
        name: `github`,
        url: `https://github.com/vedantsuryawanshi`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/thevedantsuryawanshi`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kiviro by Vedant Suryawanshi`,
        short_name: `Kiviro`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
