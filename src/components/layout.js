import React from 'react'
import { SEOContext } from 'gatsby-plugin-wpgraphql-seo'
import { useStaticQuery, graphql } from 'gatsby'

import Navbar from './navbar'
import Footer from './footer'

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const {
    wp: { seo },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
        seo {
          contentTypes {
            post {
              title
              schemaType
              metaRobotsNoindex
              metaDesc
            }
            page {
              metaDesc
              metaRobotsNoindex
              schemaType
              title
            }
          }
          webmaster {
            googleVerify
            yandexVerify
            msVerify
            baiduVerify
          }
          schema {
            companyName
            personName
            companyOrPerson
            wordpressSiteName
            siteUrl
            siteName
            inLanguage
            logo {
              sourceUrl
              mediaItemUrl
              altText
            }
          }
          social {
            facebook {
              url
              defaultImage {
                sourceUrl
                mediaItemUrl
              }
            }
            instagram {
              url
            }
            linkedIn {
              url
            }
            mySpace {
              url
            }
            pinterest {
              url
              metaTag
            }
            twitter {
              username
            }
            wikipedia {
              url
            }
            youTube {
              url
            }
          }
        }
      }
    }
  `)

  return (
    <SEOContext.Provider value={{ global: seo }}>
      <div className="flex flex-col min-h-vh font-sans">
        <Navbar />
        <main className="mt-20">{children}</main>
        <Footer />
      </div>
    </SEOContext.Provider>
  )
}

export default Layout
