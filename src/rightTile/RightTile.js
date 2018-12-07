import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./RightTileStyles";

const RightTile = ({ classes }) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>Veranstaltungen</div>
            <div className={classes.contentWrapper}>hallo</div>
        </div>
    );
};

export default withStyles(styles)(RightTile);
