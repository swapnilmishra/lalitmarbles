import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "@material-ui/core/Container"
import { GraniteImageURLs } from "../components/imageurls"
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

const GranitesPage = () => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="Marbles" />
      <Container className={classes.container}>
        <Paper className={classes.headingBlock}>
          <Typography variant="h5" component="h1">
            Granites
          </Typography>
          <Typography component="p" variant="body2">
            Granite is a common type of felsic intrusive igneous rock that is
            granular and phaneritic in texture. Granites can be predominantly
            white, pink, or gray in color, depending on their mineralogy. The
            word "granite" comes from the Latin granum, a grain, in reference to
            the coarse-grained structure of such a holocrystalline rock.
          </Typography>
        </Paper>
      </Container>
      <Container className={classes.container}>
        <ImageGrid
          tileData={buildTilesData({
            imageURLs: GraniteImageURLs,
          })}
        />
      </Container>
    </Layout>
  )
}

export default GranitesPage
