import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PlaylistAdd from "@material-ui/icons/PlaylistAdd";
import DeleteBasket from "@material-ui/icons/Delete";
import Download from "@material-ui/icons/CloudDownload";
import { styles } from "./LeftTileStyles";

const LeftTile = ({ classes }) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.headerWrapper}>
                <div className={classes.addButtonWrapper}>
                    <PlaylistAdd className={classes.addIcon} />
                    <span className={classes.iconText}>hinzufügen</span>
                </div>
                <div className={classes.deleteButtonWrapper}>
                    <DeleteBasket className={classes.deleteIcon} />
                    <span className={classes.iconText}>löschen</span>
                </div>
                <div className={classes.exportButtonWrapper}>
                    <Download className={classes.exportIcon} />
                    <span className={classes.iconText}>export</span>
                </div>
            </div>
            <div className={classes.contentWrapper}>hallo</div>
        </div>
    );
};

export default withStyles(styles)(LeftTile);
