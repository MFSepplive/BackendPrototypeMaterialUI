import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Add from "@material-ui/icons/PlaylistAdd";
import Delete from "@material-ui/icons/Delete";
import Download from "@material-ui/icons/CloudDownload";
import { styles } from "./LeftTileStyles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Switch from "@material-ui/core/Switch";

let id = 0;
function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

class LeftTile extends React.Component {
    state = {
        checkedA: true
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render(){
        const { classes } = this.props;

        return (
            <div className={classes.wrapper}>
                <div className={classes.headerWrapper}>
                    <div className={classes.addButtonWrapper}>
                        <Add className={classes.addIcon} />
                        <span className={classes.iconText}>hinzufügen</span>
                    </div>
                    <div className={classes.deleteButtonWrapper}>
                        <Delete className={classes.deleteIcon} />
                        <span className={classes.iconText}>löschen</span>
                    </div>
                    <div className={classes.exportButtonWrapper}>
                        <Download className={classes.exportIcon} />
                        <span className={classes.iconText}>export</span>
                    </div>
                </div>
                <div className={classes.contentWrapper}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell>Datum</TableCell>
                                <TableCell>Typ</TableCell>
                                <TableCell>Titel</TableCell>
                                <TableCell>Sichtbar</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(row => {
                                return (
                                    <TableRow key={row.id}>
                                        <TableCell component="th" scope="row">
                                            {row.id}
                                        </TableCell>
                                        <TableCell>{row.name}</TableCell>
                                        <TableCell>{row.name}</TableCell>
                                        <TableCell>{row.name}</TableCell>
                                        <TableCell>
                                            <Switch color="primary"/>
                                            </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(LeftTile);
