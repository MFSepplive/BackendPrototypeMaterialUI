import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { styles } from "./OwnSideBarStyles.js";

class OwnSideBar extends React.Component {
    state = {
        open: false,
    };

    handleDrawer = () => {
        this.setState({ open: !this.state.open });
    };

    render() {
        const { classes } = this.props;
        const { open } = this.state;

        return (
            <AppBar className={classes.appBar}>
                <Toolbar className={classes.toolBar}>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.handleDrawer}>
                        <MenuIcon className={classes.menuButtonIcon} />
                    </IconButton>
                    <Divider />

                    <List>
                        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                            <ListItem button key={text} className={classes.listItem}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            </ListItem>
                        ))}
                    </List>
                </Toolbar>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.handleDrawerClose}>
                            <MenuIcon className={classes.menuButtonIcon} />
                        </IconButton>
                        <div className={classes.menuButtonTextWrapper}>
                            <span className={classes.menuButtonText}>Navigation</span>
                        </div>
                    </div>
                    <Divider />
                    <List>
                        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                            <ListItem button key={text} className={classes.listItem}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </AppBar>
        );
    }
}

export default withStyles(styles, { withTheme: true })(OwnSideBar);
