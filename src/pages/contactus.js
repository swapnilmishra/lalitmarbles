import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Typography, Box } from "@material-ui/core"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import PhoneIcon from "@material-ui/icons/Phone"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail"

import "./../css/maps.css"

const useStyles = makeStyles(theme => ({
  headingBlock: {
    padding: theme.spacing(3),
  },
  primaryText: {
    color: theme.palette.text.secondary,
  },
  container: {
    marginTop: 50,
  },
}))

const ContactUsPage = () => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="Contact us" />
      <Paper className={classes.container}>
        <div className={classes.headingBlock}>
          <Typography variant="h5" component="h3">
            Contact us
          </Typography>
        </div>

        <Box
          display="flex"
          justifyContent="space-evenly"
          className={classes.container}
        >
          <Box style={{ textAlign: "center" }}>
            <LocationOnIcon />
            <Typography className={classes.primaryText}>
              <Typography variant="subtitle2" component="p">
                Mahatma Galli, Rajnagar
              </Typography>
              <Typography variant="subtitle2" component="p">
                Rajsamand, Rajasthan, India
              </Typography>
            </Typography>
          </Box>
          <Box style={{ textAlign: "center" }}>
            <PhoneIcon />
            <Typography
              className={classes.primaryText}
              variant="subtitle2"
              component="p"
            >
              +91-9000000000
            </Typography>
          </Box>
          <Box style={{ textAlign: "center" }}>
            <AlternateEmailIcon />
            <Typography variant="subtitle2" component="p">
              <a
                className={classes.primaryText}
                href="mailto: lalitmarbles@gmail"
              >
                lalitmarbles@gmail.com
              </a>
            </Typography>
          </Box>
        </Box>

        <iframe
          title="lalit marbles embedded map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115669.03352306716!2d73.81499861930742!3d25.045701681219438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39686b839bae6cf5%3A0x12b788e27ab3c55b!2sRajsamand%2C%20Rajasthan%2C%20India!5e0!3m2!1sen!2sde!4v1571004271896!5m2!1sen!2sde"
          className="maps-el"
          style={{ frameborder: 0, border: 0 }}
        ></iframe>
      </Paper>
    </Layout>
  )
}

export default ContactUsPage
