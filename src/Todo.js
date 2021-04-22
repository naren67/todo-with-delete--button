import React from 'react'
import db from './firebase'
import './Todo.css'

function Todo({todos}) {
          return (
                    <div className='todo'>
                              
                                        {todos.map(todo=>(
                                                  
                                                  <div className="todo__list">
                                                            <p>{todo.todo}</p>
                                                  <button onClick={event => db.collection('todos').doc(todo.id).delete()}>delete me</button>
                                                  </div>
                                        ))}
                              
                              
                              
                    </div>
          )
}

export default Todo
