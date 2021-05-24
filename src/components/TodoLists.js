import React from 'react'
import './TodoLists.css'
import { List, ListItem, ListItemAvatar, ListItemText} from '@material-ui/core'

function TodoLists(props) {
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary = {props.text} secondary='Dummy deadline ⏰ '/>
            </ListItem>
       
        </List>
    )
}

export default TodoLists;
