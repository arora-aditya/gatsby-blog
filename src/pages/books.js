import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Section from '../components/section'
import Pills from '../components/pills'
import MainBio from '../components/main-bio'
import { formatPostDate, formatReadingTime } from '../utils/dates'

import './blog-listing.css'

const BooksIndexPage = ({ data: { allMdx } }) => (
  <Layout>
    <SEO />
    <Section centered name="main-bio">
      <MainBio />
      <p>Below are some of the books I've reviewed,</p>
      <p>For a more complete list of books I've read, see <a href="https://arora-aditya.com/reading" target="_blank">here</a></p>
    </Section>

    {allMdx.nodes.map(post => {
      if(post.frontmatter.published === false){
        return (
          <Section key={post.fields.slug} name={post.fields.slug} centered>
              <h1>{post.frontmatter.title}</h1>
              <Pills items={post.frontmatter.categories.concat(["Review WIP"])} />
              <p>{post.frontmatter.description}</p>
          </Section>
        )
      } else {
        return (
          <Section key={post.fields.slug} name={post.fields.slug} centered>
            <Link to={post.fields.slug} className="blog-listing">
              <h1>{post.frontmatter.title}</h1>
              <p>
                {formatPostDate(post.frontmatter.date)}
                {` • ${formatReadingTime(post.timeToRead)}`}
              </p>
              <Pills items={post.frontmatter.categories} />
              <p>{post.frontmatter.description}</p>
            </Link>
          </Section>
        )
      }
      
    })}
  </Layout>
)

export default BooksIndexPage

export const query = graphql`
  query BooksIndex {
    allMdx(
      filter: { 
        frontmatter: {
          categories: {in: ["Books"]},
          upcoming: { 
            in: [false, null] 
          },
          currently_reading: {
            in: [false, null] 
          },
          published: {
          	eq: true
          }
        } 
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        fields {
          slug
        }
        timeToRead
        frontmatter {
          upcoming
          currently_reading
          published
          title
          description
          categories
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`
