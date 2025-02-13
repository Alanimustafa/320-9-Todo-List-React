import { useState, useReducer } from 'react'
import { initialState } from './Data/data'
import './App.css'

function TodoList() {

  function todoReducer() {}

// Using the useReducer to Manage the State of the list
const [todos, dispatch] = useReducer(todoReducer, initialState)
  
  return (
    <>
      <div className="todoListMainContainer">
        <h4 className='todoAppAssignment'>320-9 - Building a Todo List</h4>
        <h1 className='todoAppHeader'>Todo List Applicaiton</h1>
        <div className="todoInputContainer">
            <input className='todoInputFiled' type="text" placeholder='todo'/>
            <button className='todoAddBTN'>ADD</button>
        </div>
        <div className="todosData">
          <ul>
            <h3>Current List</h3> 

            {todos.map(todo => (
                <li className='todolistbollet'>
                <input className='displayTodoListLI' type="text" value={todo.title}/> 
                <input className='todoCheckBox' type="checkbox" value={todo.completed}/>
                <div className='todoJobBTNsContainer'>
                    <button className='editDeleteBTNS'>Edit</button>
                    <button className='editDeleteBTNS'>Delete</button>
                </div>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </>
  )
}

export default TodoList
