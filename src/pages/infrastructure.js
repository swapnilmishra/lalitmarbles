import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "@material-ui/core/Container"
import { InfrastructureImageURLs } from "../components/imageurls"
import ImageGrid, { buildTilesData } from "./../components/imagegrid"
import { Typography } from "@material-ui/core"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"

const featuredTiles = [
  InfrastructureImageURLs.MINES3,
  InfrastructureImageURLs.MINES6,
]

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: 50,
  },
  headingBlock: {
    padding: theme.spacing(3),
  },
}))

const InfrastructurePage = () => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="Infrastructure" />
      <Container className={classes.container}>
        <Paper className={classes.headingBlock}>
          <Typography variant="h5" component="h3">
            Infrastructure
          </Typography>
          <Typography component="p">Some text about Infrastructure</Typography>
        </Paper>
      </Container>
      <Container>
        <ImageGrid
          tileData={buildTilesData({
            featuredTiles,
            imageURLs: InfrastructureImageURLs,
          })}
        />
      </Container>
    </Layout>
  )
}

export default InfrastructurePage
