const config = require('./config')

module.exports = {
  siteMetadata: config,
  pathPrefix: '/',
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md', '.mdx'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 500,
              backgroundColor: 'transparent',
              showCaptions: true,
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-embed-video',
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-autolink-headers',
          'gatsby-remark-smartypants',
          {
            resolve: '@weknow/gatsby-remark-twitter',
            options: {
              align: 'center',
            },
          },
          'gatsby-remark-external-links',
        ],
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 500,
              backgroundColor: 'transparent',
              showCaptions: true,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/content`,
      },
    },
    'gatsby-plugin-netlify',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: '{{ authorName }}',
        short_name: '{{ authorName }}',
        start_url: '/',
        background_color: '#001724',
        theme_color: '#001724',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return {
                  ...edge.node.frontmatter,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                }
              })
            },
            query: `
            {
              allMdx(
                filter: { 
                  fields: { 
                    published: { 
                      eq: true 
                    },
                  },
                  frontmatter: {
                    categories: {nin: ["Books"]}
                  } 
                }
                limit: 1000,
                sort: {
                  order: DESC,
                  fields: [frontmatter___date]
                }
              ) {
                edges {
                  node {
                    frontmatter {
                      title
                      description
                      date
                    }
                    fields {
                      slug
                    }
                  }
                }
              }
            }
          `,
            title: `Aditya Arora's blog feed`,
            output: `rss.xml`,
          },
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [
                    { 
                      "content:encoded": edge.node.html,
                    },
                    {
                      "published": edge.node.frontmatter.published,
                    },
                    {
                      "currently_reading": edge.node.frontmatter.currently_reading,
                    },
                    {
                      "upcoming": edge.node.frontmatter.upcoming,
                    }
                  ],
                })
              })
            },
            query: `
            {
              allMdx(
                filter: { 
                  frontmatter: {
                    categories: {in: ["Books"]}
                  }
                }
                limit: 1000,
                sort: {
                  order: DESC,
                  fields: [frontmatter___date]
                }
              ) {
                edges {
                  node {
                    frontmatter {
                      title
                      description
                      date
                      author
                      published
                      currently_reading
                      upcoming
                    }
                    fields {
                      slug
                    }
                  }
                }
              }
            }
          `,
            match: "^/books/",
            title: `Aditya Arora's book blog feed`,
            output: `book-rss.xml`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-custom-blocks",
            options: {
              blocks: {
                table_desktop: {
                  classes: "table_desktop",
                },
                table_mobile: {
                  classes: "table_mobile",
                },
              },
            },
          },
        ],
      },
    },
  ],
}
