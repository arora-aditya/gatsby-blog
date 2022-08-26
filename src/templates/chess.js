import React, {useState, useEffect} from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import SEO from '../components/seo'
import Pills from '../components/pills'
import Bio from '../components/bio'
import Embed from '../components/embed'
import { formatPostDate, formatReadingTime } from '../utils/dates'

import './blog-post.css'
import './chess.css'

export default function PageTemplate({ data: { mdx, site, allGames }, pageContext }) {
  const { previous, next, permalink } = pageContext
  const [games, setGames] = useState([])
  
  const formatDaysAgo = (value, locale) => {
    const date = new Date(value);
    const deltaDays = Math.round((date.getTime() - Date.now()) / (1000 * 3600 * 24));
    if(deltaDays === 0){
      return 'today'
    }
    const formatter = new Intl.RelativeTimeFormat(locale);
    return formatter.format(deltaDays, 'days');
  }
  
  useEffect(() => {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function() {
      if(this.readyState === 4) {
        setGames(JSON.parse(this.responseText.toString()));
      }
    });

    xhr.open("GET", "https://backend.arora-aditya.com/");

    xhr.send();
  }, [])
  

  
  
  return (
    <div>
      <SEO
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.description || mdx.excerpt}
        canonicalLink={mdx.frontmatter.canonical_link}
        keywords={mdx.frontmatter.categories || []}
        meta={[
          {
            name: 'twitter:label1',
            content: 'Reading time',
          },
          {
            name: 'twitter:data1',
            content: `${mdx.timeToRead} min read`,
          },
        ]}
      />
      <section className="center blog">
        <article className="container small">
          <header>
            <h1>
              <button className="link-button back" onClick={() => window.history.back()}>«</button> {mdx.frontmatter.title}
            </h1>
            <p>
              {formatPostDate(mdx.frontmatter.date)}
              {` • ${formatReadingTime(mdx.timeToRead)}`}
            </p>
            <Pills items={mdx.frontmatter.categories} />
          </header>

          <MDXRenderer scope={{ Embed }}>{mdx.body}</MDXRenderer>
          <div className="chess-games">
            {games.map(x => 
              <div key={x.id} className="chess-game">
                <img className="chess-gif" alt={`chess game id: ${x.id}`} src={`https://lichess1.org/game/export/gif/${x.id}.gif`} />
                <p><a href={`https://lichess.org/${x.id}`}>Link</a> to game that started as a {x.opening.name}, played {formatDaysAgo(new Date(x.createdAt), "en-CA")} at {new Date(x.createdAt).toLocaleTimeString("en-CA")} where
                 I {x.status === "draw" ? "drew" : ("SwanJaguar" === x.players[x.winner].user.name ? "won" : "lost")}</p>
              </div>
            )}
          </div>
        </article>
        <footer className="container small">
          <small>
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href={`https://twitter.com/search?q=${permalink}`}
            >
              Discuss on Twitter
            </a>{' '}
            &middot;{' '}
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href={`${site.siteMetadata.githubUrl}/edit/master/content${mdx.fields.slug}index.md`}
            >
              Suggest changes on Github
            </a>
          </small>
          <hr
            style={{
              margin: `24px 0`,
            }}
          />
          <Bio />
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </footer>
      </section>
    </div>
  )
}

export const pageQuery = graphql`
  query ChessPostQuery($id: String) {
    site {
      siteMetadata {
        siteUrl
        githubUrl
      }
    }
    mdx(id: { eq: $id }) {
      fields {
        slug
      }
      excerpt
      timeToRead
      frontmatter {
        title
        description
        categories
        date(formatString: "MMMM DD, YYYY")
        canonical_link
      }
      body
    }
  }
`
