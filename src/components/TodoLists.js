import React,{useState} from 'react'
import './TodoLists.css'
import { Modal, List, ListItem, ListItemAvatar, ListItemText, Button, Input} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import db from './firebase'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';



const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      borderRadius: 5, 
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2,4),
      top: theme.spacing(20),
      left: theme.spacing(100)
      
    },
  }));

function TodoLists(props) {
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const [input, setInput] = useState('')
    

    const deleteHandler = (event) => {
        event.preventDefault()

        db.collection('todos').doc(props.todo.id).delete()
        

    }

    
    
    const closeHandler = e => {
        setOpen(false)
    }
    const openHandler = e => {
        setOpen(true)
    }

    const updateTodo = event => {
        // update with the input text
        // access to the db
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        },{merge: true})
        
        setOpen(false)

    }
    const inputHandler = event => {
        setInput(event.target.value)
    }
    return (
        <>
            
            <Modal
            
            open={open}
            onClose={closeHandler}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description">
                <div className={classes.paper} >
                    <h3>Update Todo</h3>
                    <Input placeholder={props.todo.todo} value={input} onChange={inputHandler}/>
                    <Button variant="outlined" color="primary" disabled={!input}
                    onClick={updateTodo}
                    style={{ marginLeft: 10 }} >
                        Update Todo
                    </Button>
                        
                </div>
            </Modal>
            
            <List className="todo__list">
                <ListItem>
                    <ListItemAvatar>
                    </ListItemAvatar>
                    <ListItemText primary = {props.todo.todo} secondary='todo⏰ 🔥 ⏳ 🔫  '/>
                    <EditIcon className='edit' onClick={openHandler}>Edit</EditIcon>
                    <DeleteForeverIcon onClick={deleteHandler}/>
                </ListItem>
        
            </List>
        </>
    )
}

export default TodoLists;
