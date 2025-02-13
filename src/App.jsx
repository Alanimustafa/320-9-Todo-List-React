import { useState, useReducer } from 'react'
import { initialState } from './Data/data'
import './App.css'

function TodoList() {


  // The todoReducer function to update the state according to the action types
  function todoReducer(state, action) {

    //Creating sswtiches for the action cases 
    switch (action.type) {
      case "ADD_TODO" : return [{}, ...state];
      case "CHECKED_COMPLETE" : return (console.log("Checked Completed"));
      case "DELETE_TODO" : return (console.log("Todo Deleted"));
      case "EDIT_TODO" : return (console.log("Todo Edited"));
      case "SAVE_TODO" : return (console.log("Todo Saved"));
    }

  }

// Using the useReducer to Manage the State of the list revoked from the data.
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
                <li className='todolistbollet' key={todo.id}>
                    <input className='displayTodoListLI' type="text" value={todo.title}/> 
                    <input className='todoCheckBox' type="checkbox" checked={todo.completed}/>
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
