import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

const DataTable = (props) =>  {
    const classes = useStyles();
    return (
        <tr>
            <td>
                {props.obj.name}
            </td>
            <td>
                {props.obj.email}
            </td>
            <td>
                {props.obj.description}
            </td>
            <td>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                    onClick={() => props.onDelete(props.obj._id)}
                >
                    Delete
                </Button>
            </td>
        </tr>
    );
}

export default DataTable;
