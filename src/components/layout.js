/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Container from "@material-ui/core/Container"
import Header from "./header"
import { Typography } from "@material-ui/core"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"

const theme = createMuiTheme({
  // palette: {
  //   primary: purple,
  //   secondary: green,
  // },
  // status: {
  //   danger: "orange",
  // },
})

const fullWidthStyle = {
  width: "100%",
}

const Layout = ({ children, fullWidthContent }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <MuiThemeProvider theme={theme}>
      <Fragment>
        <div style={{ minHeight: "calc(100vh - 20px)" }}>
          <Header siteTitle={data.site.siteMetadata.title} />
          {fullWidthContent && renderFullWidthContent(fullWidthContent)}
          <Container>
            <main>{children}</main>
          </Container>
        </div>
        <footer>
          <Container>
            <Typography variant="caption">
              © Lalit Marbles Pvt. Ltd {new Date().getFullYear()}
            </Typography>
          </Container>
        </footer>
      </Fragment>
    </MuiThemeProvider>
  )
}

const renderFullWidthContent = content => {
  return <div style={fullWidthStyle}>{content}</div>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
