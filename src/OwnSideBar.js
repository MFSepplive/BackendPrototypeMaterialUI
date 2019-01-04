import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { styles } from "./OwnSideBarStyles.js";
import classNames from 'classnames';
import Me from './images/me.png';

class OwnSideBar extends React.Component {
    state = {
        open: false
    };

    handleDrawer = () => {
        this.setState({ open: !this.state.open });
    };

    render() {
        const { classes } = this.props;
        const { open } = this.state;

        return (
            <div className={classes.root}>
                <Drawer
                    variant="permanent"
                    className={classNames(classes.drawer, {
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open
                    })}
                    classes={{
                        paper: classNames({
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open
                        }),
                    }}
                    open={open}
                >
                    <List className={classes.toolbar}>
                        <ListItem button className={classes.listItem} onClick={this.handleDrawer}>
                            <ListItemIcon>{<MenuIcon />}</ListItemIcon>
                            <ListItemText primary={"Navigation"} />
                        </ListItem>
                        <ListItem button className={classes.listItemImage}>
                            <ListItemIcon>
                                <img className={classes.image} src={Me}/>
                            </ListItemIcon>
                            <ListItemText primary={"Max Mustermann"} className={classes.listItemImageText}/>
                        </ListItem>
                        <ListItem button className={classes.listItem}>
                            <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                            <ListItemText primary={"Dashboard"} />
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem button key={text} className={classes.listItem}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem button key={text} className={classes.listItem}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(OwnSideBar);
