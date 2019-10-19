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
          <Typography variant="h5" component="h3">
            Marbles
          </Typography>
          <Typography component="p">
            Marble is a metamorphic rock composed of recrystallized carbonate
            minerals, most commonly calcite or dolomite. Marble is typically not
            foliated, although there are exceptions. In geology, the term
            "marble" refers to metamorphosed limestone, but its use in
            stonemasonry more broadly encompasses unmetamorphosed limestone.
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
