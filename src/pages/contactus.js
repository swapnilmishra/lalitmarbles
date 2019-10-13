import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Typography, Box } from "@material-ui/core"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import PhoneIcon from "@material-ui/icons/Phone"
import ContactsIcon from "@material-ui/icons/Contacts"
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail"

const useStyles = makeStyles(theme => ({
  headingBlock: {
    padding: theme.spacing(3),
  },
  primaryText: {
    color: theme.palette.text.primary,
  },
  root: {
    marginTop: 50,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    "& svg": {
      margin: theme.spacing(2),
    },
  },
}))

const ContactUsPage = () => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="Contact us" />
      <Paper className={classes.headingBlock}>
        <Typography variant="h5" component="h3">
          Contact us
        </Typography>

        <Box
          display="flex"
          justifyContent="space-evenly"
          className={classes.root}
        >
          <Box>
            <ContactsIcon />
            <Typography className={classes.primaryText}>
              <p>Mahatma Galli, Rajnagar</p>
              <p>Rajsamand, Rajasthan, India</p>
            </Typography>
          </Box>
          <Box>
            <PhoneIcon />
            <Typography className={classes.primaryText}>
              +91-9000000000
            </Typography>
          </Box>
          <Box>
            <AlternateEmailIcon />
            <Typography>
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
