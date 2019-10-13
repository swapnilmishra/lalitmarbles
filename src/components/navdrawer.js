import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import CloseIcon from "@material-ui/icons/Close"
import ListItemIcon from "@material-ui/core/ListItemIcon"

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
        {["Home", "Products", "About Us", "Contact Us"].map(text => (
          <ListItem button key={text} className={classes.listItem}>
            <ListItemText primary={text} />
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
