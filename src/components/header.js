import PropTypes from "prop-types"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import NavDrawer from "./navdrawer"
import Logo from "../images/logo.png"
import { Link } from "gatsby-theme-material-ui"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  productsButton: {
    marginRight: theme.spacing(2),
    color: theme.palette.common.white,
  },
  menuIcon: {
    marginRight: theme.spacing(2),
    color: theme.palette.common.white,
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  productsLink: {
    color: theme.palette.text.primary,
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: theme.palette.common.black,
  },
  logoImage: {
    height: 30,
    marginBottom: 0,
    display: "inline",
  },
  headerLinkContainer: {
    marginLeft: 50,
    [theme.breakpoints.up("md")]: {
      display: "initial",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  headerLink: {
    color: theme.palette.common.white,
    marginRight: 16,
  },
}))

function NavBar() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const HeaderLink = ({ children, ...props }) => {
    return (
      <Link className={classes.headerLink} {...props} variant="button">
        {children}
      </Link>
    )
  }

  return (
    <div className={classes.root}>
      <NavDrawer
        open={open}
        onCloseCallback={() => {
          setOpen(false)
        }}
      />
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <IconButton
            className={classes.menuIcon}
            aria-label="menu"
            onClick={() => {
              setOpen(true)
            }}
          >
            <MenuIcon />
          </IconButton>
          <div>
            <Link to="/">
              <img
                src={Logo}
                alt="Lalit Marbles logo"
                className={classes.logoImage}
              />
            </Link>
          </div>
          <div className={classes.headerLinkContainer}>
            <HeaderLink to="/">home</HeaderLink>
            <HeaderLink to="/marbles">marbles</HeaderLink>
            <HeaderLink to="/granites">granites</HeaderLink>
            <HeaderLink to="/infrastructure">infrastructure</HeaderLink>
            <HeaderLink to="/aboutus">about us</HeaderLink>
            <HeaderLink to="/contactus">contact us</HeaderLink>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

const Header = ({ siteTitle }) => <NavBar title={siteTitle} />

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
