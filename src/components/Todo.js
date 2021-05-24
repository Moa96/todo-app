import React, {useState,useEffect}from 'react';

import { Button, FormControl, InputLabel, Input } from '@material-ui/core'
import TodoLists from './TodoLists'
import db from './firebase'
import firebase from 'firebase'


const Todo = () => {
    const [todos,setTodos] = useState([])

    const [input, setInput] = useState('')

    // when app loads, we need to listen to the db and fetch new todos as they added/removed
    useEffect(() => {
        
        // code ... fires when the todo.js is loaded
        db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
            // console.log(snapshot.docs.map(doc =>doc.data()))
            setTodos(snapshot.docs.map(doc => ({
                id: doc.id,
                todo: doc.data().todo
            })))//allows us to read from firebase Db
        })

    }, [input]);
    
    // console.log(input)
    // get the value from the input
    const inputHandler = (event) => {
        setInput(event.target.value)
        
        
        // console.log(event.target.value)
    
    }

    const addListHandler = (event) => {
        event.preventDefault() // prevent from refreshing
        // console.log('👾 ','Clicked ME')

        // add it to the db 
        db.collection('todos').add({
            todo: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        
        //add the list when entered something
        setTodos([...todos, input])
        // clear the input after submitted
        setInput('')
        
    }

   
    return (

        <div>
            
            <FormControl>
                <InputLabel >✅ Write a Todo</InputLabel>
                <Input type="text"
                value={input}
                        onChange={inputHandler}
                />
                
                
                </FormControl>
                {/**Disable button if submitted while the input is empty */}
            <Button variant="contained" color="primary"
                style={{ marginLeft: 10, marginTop:12 }}
                type="submit"
                onClick={addListHandler}
                disabled={!input}>
                    Add Todo
                </Button>
            

           

            <ul>
                {todos.map(todo => (
                    <TodoLists todo={todo}/>
                    // <TodoLists text={todo} />
                    //<li key={todo}>{todo}</li>
                    
                ) )}
                
            </ul>

        </div>
    );
}

export default Todo;
