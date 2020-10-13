import React, {useState} from "react";

import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from "../apis/axios.config";

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

const DataTable = (props) =>  {
    const classes = useStyles();
    const [ edit, setEdit ] = useState(false);
    const [ name, setName ] = useState(props.obj.plan);
    const [ email, setEmail ] = useState(props.obj.location);
    const [ description, setDescription ] = useState(props.obj.description);

    const onEdit = () => {
        edit ? setEdit(false) : setEdit(true);
    }

    const onChangeUserName = (e) => {
         setName(e.target.value)
    }

    const onChangeUserEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangeUserDescription = (e) => {
        setDescription(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const userObject = {
            plan:name,
            location:email,
            description:description
        };

        axios.put(`users/update/${props.obj._id}`, userObject).then((res) => {
            setEdit(false);
            props.refresh();
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <tr>
            <td>
                {edit ? <input type="text" value={name} onChange={onChangeUserName}/> : props.obj.plan}
            </td>
            <td>
                {edit ? <input type="text" value={email} onChange={onChangeUserEmail}/> : props.obj.location}
            </td>
            <td>
                {edit ? <input type="text" value={description} onChange={onChangeUserDescription}/> : props.obj.description}
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
                {edit ?
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        endIcon={<Icon>edit</Icon>}
                        onClick={onSubmit}
                    >
                        Save
                    </Button> :
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        endIcon={<Icon>edit</Icon>}
                        onClick={onEdit}
                    >
                        Edit
                    </Button>

                }
            </td>
        </tr>
    );
}

export default DataTable;
