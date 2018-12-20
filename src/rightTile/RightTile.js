import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./RightTileStyles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

class RightTile extends React.Component {
    state = {
        value: 0
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.wrapper}>
                <div className={classes.header}>
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                    >
                        <Tab className={classes.tab} label="Veranstaltung" />
                        <Tab className={classes.tab} label="Beschreibung" />
                        <Tab className={classes.tab} label="Anmeldungen" />
                        <Tab className={classes.tab} label="Kommunikation" />
                    </Tabs>
                </div>
                <div className={classes.contentWrapper}>
                    <div>
                        Veranstaltungen
                    </div>
                    <div>
                        Titel der Veranstaltung
                    </div>
                </div>
                <div className={classes.buttonWrapper}>
                    <span className={classes.buttonText}>speichern</span>
                </div>
                <div className={classes.shortCutsWrapper}>
                    <div className={classes.shortCut}>
                        Command+S
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(RightTile);
