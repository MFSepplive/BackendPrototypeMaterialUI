import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./MainContentStyles";
import LeftTile from "./leftTile/LeftTile";
import RightTile from "./rightTile/RightTile";

const MainContent = ({ classes }) => {
    return (
        <div className={classes.contentWrapper}>
            <div className={classes.title}>Veranstaltungen</div>
            <div className={classes.tilesWrapper}>
                <div className={classes.leftTileWrapper}>
                    <LeftTile />
                </div>
                <div className={classes.rightTileWrapper}>
                    <RightTile />
                </div>
            </div>
        </div>
    );
};

export default withStyles(styles)(MainContent);
