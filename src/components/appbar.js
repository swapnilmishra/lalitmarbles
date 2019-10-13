import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Button from "@material-ui/core/Button"
import NavDrawer from "./navdrawer"
import Logo from "../images/logo.png"
import { Link } from "gatsby-theme-material-ui"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: theme.palette.common.white,
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
  },
  headerLink: {
    color: theme.palette.common.white,
  },
}))

export default function ButtonAppBar() {
  const classes = useStyles()

  const [open, setOpen] = React.useState(false)

  const HeaderLink = ({ props, children }) => {
    return (
      <Link className={classes.headerLink} {...props}>
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
            className={classes.menuButton}
            aria-label="menu"
            onClick={() => {
              setOpen(true)
            }}
          >
            <MenuIcon />
          </IconButton>
          <div>
            <img
              src={Logo}
              alt="Lalit Marbles logo"
              className={classes.logoImage}
            />
          </div>
          <div className={classes.headerLinkContainer}>
            <Button>
              <HeaderLink to="/">products</HeaderLink>
            </Button>
            <Button edge="end" color="inherit">
              <HeaderLink to="/">infrastructure</HeaderLink>
            </Button>
            <Button edge="end" color="inherit">
              <HeaderLink to="/">about us</HeaderLink>
            </Button>
            <Button edge="end" color="inherit">
              <HeaderLink to="/">contact us</HeaderLink>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}
