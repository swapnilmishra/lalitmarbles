import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "@material-ui/core/Container"
import { MarblesImagesURLs } from "../components/imageurls"
import ImageGrid, { buildTilesData } from "./../components/imagegrid"
import { Typography } from "@material-ui/core"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: 50,
  },
  headingBlock: {
    padding: theme.spacing(3),
  },
}))

const MarblesPage = () => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="Marbles" />
      <Container className={classes.container}>
        <Paper className={classes.headingBlock}>
          <Typography variant="h5" component="h1">
            Marbles
          </Typography>
          <Typography component="p" variant="body2">
            Traditionally, Marble is used for building tombs, temples and
            palaces. For a time it was considered as Royal Stone. It is,
            however, now used in hotels and homes too. There are many varieties
            of marbles produced in India such as Arna, Dungri, Jhanjar, Talai,
            Udaipur pink.
          </Typography>
        </Paper>
      </Container>
      <Container className={classes.container}>
        <ImageGrid
          tileData={buildTilesData({
            imageURLs: MarblesImagesURLs,
          })}
        />
      </Container>
    </Layout>
  )
}

export default MarblesPage
