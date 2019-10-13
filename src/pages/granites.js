import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "@material-ui/core/Container"
import { GraniteImageURLs } from "../components/imageurls"
import ImageGrid, { buildTilesData } from "./../components/imagegrid"
import { Typography } from "@material-ui/core"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"

const featuredTiles = [GraniteImageURLs.CAT_EYE, GraniteImageURLs.P_WHITE]

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
          <Typography variant="h5" component="h3">
            Granites
          </Typography>
          <Typography component="p">
            Granite is a common type of felsic intrusive igneous rock that is
            granular and phaneritic in texture. Granites can be predominantly
            white, pink, or gray in color, depending on their mineralogy. The
            word "granite" comes from the Latin granum, a grain, in reference to
            the coarse-grained structure of such a holocrystalline rock.
            Strictly speaking, granite is an igneous rock with between 20% and
            60% quartz by volume, and at least 35% of the total feldspar
            consisting of alkali feldspar, although commonly the term "granite"
            is used to refer to a wider range of coarse-grained igneous rocks
            containing quartz and feldspar.
          </Typography>
        </Paper>
      </Container>
      <Container className={classes.container}>
        <ImageGrid
          tileData={buildTilesData({
            featuredTiles,
            imageURLs: GraniteImageURLs,
          })}
        />
      </Container>
    </Layout>
  )
}

export default GranitesPage
