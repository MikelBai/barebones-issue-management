import { Button, List, ListItem, ListItemText, makeStyles, Modal } from '@material-ui/core'
import React, { useState } from 'react'
import './Issue.css'
import db from './firebase'
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Issue(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');

    const handleOpen = () => {
        setOpen(true);
    };

    const updateIssue = () => {
        db.collection('issues').doc(props.issue.id).set({
            issue: input
        }, { merge: true })
        setOpen(false)
    }

    return (
        <>
        <Modal
            open = {open}
            onClose={e => setOpen(false)}
        >
            <div className = {classes.paper}>
                <h1>Modal</h1>
                <input placeholder = {props.issue.issue} value={input} onChange={event => setInput(event.target.value)}/>
                <Button onClick={updateIssue}>Update Issue</Button>
            </div>
        </Modal>

        <List>
            <ListItem>
                <ListItemText primary={props.issue.issue} secondary="Bottom Text"/>
            </ListItem>
            <Button onClick={e => setOpen(true)}>Edit</Button>
            <DeleteSweepIcon onClick={event => db.collection('issues').doc(props.issue.id).delete()}>Delete</DeleteSweepIcon>
        </List>
        </>
    )
}

export default Issue
