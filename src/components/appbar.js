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
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  productsButton: {
    marginRight: theme.spacing(2),
    color: theme.palette.common.white,
    [theme.breakpoints.up("md")]: {
      visibility: "visible",
    },
    [theme.breakpoints.down("sm")]: {
      visibility: "hidden",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: theme.palette.common.white,
    [theme.breakpoints.down("sm")]: {
      visibility: "visible",
    },
    [theme.breakpoints.up("md")]: {
      visibility: "hidden",
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
      visibility: "visible",
    },
    [theme.breakpoints.down("sm")]: {
      visibility: "hidden",
    },
  },
  headerLink: {
    color: theme.palette.common.white,
    marginRight: 16,
  },
}))

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
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
            className={classes.menuButton}
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
            <Button
              className={classes.productsButton}
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              products
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Link className={classes.productsLink} to="/marbles">
                  Marbles
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link className={classes.productsLink} to="/granites">
                  Granites
                </Link>
              </MenuItem>
            </Menu>
            <HeaderLink to="/infrastructure">infrastructure</HeaderLink>
            <HeaderLink to="/aboutus">about us</HeaderLink>
            <HeaderLink to="/contactus">contact us</HeaderLink>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}
