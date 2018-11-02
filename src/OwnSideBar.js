import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";
import { styles } from "./OwnSideBarStyles.js";

const OwnSideBar = ({ classes }) => {
  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
        >
          <MenuIcon className={classes.menuButtonIcon} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(OwnSideBar);
