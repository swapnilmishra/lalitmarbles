import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "@material-ui/core/Container"
import {
  InfrastructureImageURLs,
  FactoryImageURLs,
} from "../components/imageurls"
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

const useOverrideStyles = makeStyles(theme => {
  return {
    image: {
      width: 250,
      height: 250,
    },
  }
})

const InfrastructurePage = () => {
  const classes = useStyles()
  const overrideClasses = useOverrideStyles()
  return (
    <Layout>
      <SEO title="Infrastructure" />
      <Container className={classes.container}>
        <Paper className={classes.headingBlock}>
          <Typography variant="h5" component="h3">
            Quarry
          </Typography>
          <Typography component="p">
            Our quarry produces one of the best marbles
          </Typography>
        </Paper>
      </Container>
      <Container>
        <ImageGrid
          shouldShowLabel={false}
          tileData={buildTilesData({
            imageURLs: InfrastructureImageURLs,
          })}
          overrideClasses={overrideClasses}
        />
      </Container>

      <Container className={classes.container}>
        <Paper className={classes.headingBlock}>
          <Typography variant="h5" component="h3">
            Processing Unit
          </Typography>
          <Typography component="p">
            This is where the marbles are processd and cut into shape. We
            process our own marble as well others'.
          </Typography>
        </Paper>
      </Container>
      <Container>
        <ImageGrid
          shouldShowLabel={false}
          tileData={buildTilesData({
            imageURLs: FactoryImageURLs,
          })}
          overrideClasses={overrideClasses}
        />
      </Container>
    </Layout>
  )
}

export default InfrastructurePage
