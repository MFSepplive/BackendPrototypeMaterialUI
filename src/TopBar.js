import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './TopBarStyles';

const TopBar = ({ classes }) => {
    return (
        <AppBar className={classes.root}>
            <div>Hallo</div>
        </AppBar>
    );
};

export default withStyles(styles)(TopBar);
