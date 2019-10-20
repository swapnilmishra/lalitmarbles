import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Typography, Box, useMediaQuery } from "@material-ui/core"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import PhoneIcon from "@material-ui/icons/Phone"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail"
import "./../css/maps.css"
import { useTheme } from "@material-ui/styles"

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
        {useAddress({ classes })}
        <iframe
          title="lalit marbles embedded map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231213.55598453563!2d73.72040115391121!3d25.111614961923532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39681525dc5db9a3%3A0x963a8a887df4ff99!2sLalit%20Marbles%20Pvt%20Ltd!5e0!3m2!1sen!2sde!4v1571554491186!5m2!1sen!2sde"
          className="maps-el"
          style={{ frameborder: 0, border: 0 }}
        ></iframe>
      </Paper>
    </Layout>
  )
}

const useAddress = ({ classes }) => {
  const theme = useTheme()
  const matchesMobile = useMediaQuery(theme.breakpoints.down("xs"))
  const addressBlockStyle = {
    textAlign: "center",
    marginTop: matchesMobile ? 20 : 0,
    padding: theme.spacing(1),
  }
  return (
    <Box
      display="flex"
      flexDirection={matchesMobile ? "column" : "row"}
      justifyContent="space-evenly"
      className={classes.container}
    >
      <Box style={addressBlockStyle}>
        <LocationOnIcon />
        <Typography className={classes.primaryText}>
          <Typography variant="subtitle2" component="p">
            N.H.8 Village. Piparda, Rajsamand, Rajasthan
          </Typography>
        </Typography>
      </Box>
      <Box style={addressBlockStyle}>
        <PhoneIcon />
        <Typography
          className={classes.primaryText}
          variant="subtitle2"
          component="p"
        >
          Mudit Mandot
        </Typography>
        <Typography
          className={classes.primaryText}
          variant="subtitle2"
          component="p"
        >
          +918094509099
        </Typography>
      </Box>
      <Box style={addressBlockStyle}>
        <AlternateEmailIcon />
        <Typography variant="subtitle2" component="p">
          <a className={classes.primaryText} href="mailto: lalitmarbles@gmail">
            lalitmarbles@gmail.com
          </a>
        </Typography>
      </Box>
    </Box>
  )
}

export default ContactUsPage
