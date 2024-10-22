import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "@material-ui/core/Container"
import { Typography, Box } from "@material-ui/core"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import { InfrastructureImageURLs } from "../components/imageurls"

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: 50,
  },
  headingBlock: {
    padding: theme.spacing(3),
  },
}))

const AboutUsPage = () => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="About us" />
      <Container className={classes.container}>
        <Paper className={classes.headingBlock}>
          <Typography variant="h5" component="h1">
            About us
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            className={classes.container}
          >
            <Typography variant="body2" component="p">
              Welcome to Lalit Marbles Company. It was established in 1992 in
              order to cater the ever growing demand of Indian stone, in the
              global market! Headquartered in Rajsamand, Rajasthan it is leading
              company bringing forth quality marble to all over India and World.
            </Typography>
            <img
              alt="infrastructure"
              src={InfrastructureImageURLs.MINES4}
              style={{ width: "100%", marginTop: 50 }}
            />
          </Box>
        </Paper>
      </Container>
    </Layout>
  )
}

export default AboutUsPage
