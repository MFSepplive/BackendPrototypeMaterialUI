import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { styles } from './OwnSideBarStyles.js';

const OwnSideBar = ({ classes }) => {
    return (
        <Toolbar className={classes.root}>
            <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
            >
                <MenuIcon className={classes.menuButtonIcon} />
            </IconButton>
        </Toolbar>
    );
};

export default withStyles(styles)(OwnSideBar);
