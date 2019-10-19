import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import CloseIcon from "@material-ui/icons/Close"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import { Link } from "gatsby-theme-material-ui"

const useStyles = makeStyles({
  fullList: {
    width: "auto",
  },
  listItem: {
    textAlign: "center",
  },
  listIconItem: {
    justifyContent: "center",
  },
  listIcon: {
    margin: "0 auto",
  },
})

export default function TemporaryDrawer(props) {
  const classes = useStyles()
  const { open, onCloseCallback } = props

  const items = [
    { name: "Home", url: "/" },
    { name: "Marbles", url: "/marbles" },
    { name: "Granites", url: "/granites" },
    { name: "Infrastructure", url: "/infrastructure" },
    { name: "About Us", url: "/aboutus" },
    { name: "Contact Us", url: "/contactus" },
  ]

  const fullList = () => (
    <div className={classes.fullList} role="presentation">
      <List>
        <ListItem
          button
          key="close"
          className={classes.listIconItem}
          onClick={onCloseCallback}
        >
          <ListItemIcon>
            <CloseIcon className={classes.listIcon} />
          </ListItemIcon>
        </ListItem>
        {items.map(item => (
          <ListItem button key={item.name} className={classes.listItem}>
            <ListItemText>
              <Link to={item.url}>{item.name}</Link>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  )

  return (
    <div>
      <Drawer anchor="top" open={open}>
        {fullList("left")}
      </Drawer>
    </div>
  )
}
