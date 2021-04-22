import './App.css';
import React,{useEffect, useState} from 'react'
import Todo from './Todo.js';
import db from './firebase'
import firebase from 'firebase'


function App() {

  // const [todos, setTodos] = useState(['create a twitter', 'learn login stuffs', 'create a app with complete powerpact'])
  const [todos, setTodos] = useState([])
  
  const [input, setInput] = useState('')

  useEffect(()=>{
           db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
             console.log(snapshot.docs.map(doc=> doc.data()))
          setTodos(snapshot.docs.map(doc=> ({id : doc.id,todo : doc.data().todo})))
        })
  },[])

  const addit =(e)=>{
    e.preventDefault()
    
    db.collection('todos').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    // setTodos([
    //   ...todos,
    //      input
    // ])
    setInput('')
  }

  console.log(input)
  return (
    <div className="App">
       <h1>todo</h1>
         <form action="">
         <input value={input} onChange={e=>{setInput(e.target.value)}} type="text"/>
         <button variant="contained" color="primary" disabled={!input} type='submit' onClick={addit}>
                Add todo
          </button>
         </form>
         
         {/* <ul>
         {todos.map(todo=>{
           <Todo
           text={todo}
           />
         })}
         </ul> */}

         <Todo
         todos={todos}
         />
    </div>
  );
}

export default App;
