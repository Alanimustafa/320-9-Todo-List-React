import { useState, useReducer } from 'react'
import { initialState } from './Data/data'
import './App.css'

function TodoList() {


  // The todoReducer function to update the state according to the action types
  function todoReducer(state, action) {

    //Creating sswtiches for the action cases 
    switch (action.type) {
      case "ADD_TODO" : return [{ id: Date.now(), title: action.payload, completed: false, editing: false }, ...state];
      case "CHECKED_COMPLETE" : return state.map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo); // Looping through the state to mark completion of the current todo.
      case "DELETE_TODO" : return state.filter(todo => todo.id !== action.payload); // Deleting the selected Todo using the id
      case "EDIT_TODO" : return state.map(todo => todo.id === action.payload ? { ...todo, editing: true } : todo);
      case "SAVE_TODO" : return state.map(todo => todo.id === action.payload.id ? { ...todo, text: action.payload.text, editing: false } : todo);
      default:
        return state;
    }
    
  }

// Using the useReducer to Manage the State of the list revoked from the data.
const [todos, dispatch] = useReducer(todoReducer, initialState)
const [newTodo, setNewTodo] = useState("");

const addTodo = () => {
  if (newTodo.trim() === "") return;
  console.log(newTodo);
  dispatch({ type: "ADD_TODO", payload: newTodo });
  setNewTodo("");
};


  return (
    <>
      <div className="todoListMainContainer">
        <h4 className='todoAppAssignment'>320-9 - Building a Todo List</h4>
        <h1 className='todoAppHeader'>Todo List Applicaiton</h1>
        <div className="todoInputContainer">
            <input className='todoInputFiled' 
                  type="text" 
                  placeholder='Enter todo'
                  value = {newTodo}
                  onChange={(event) => setNewTodo(event.target.value)}/>
            <button className='todoAddBTN'
                    onClick={addTodo}
            >ADD</button>
        </div>
        <div className="todosData">
          <ul>
            <h3>Current List</h3> 

            {todos.map(todo => (
                <li className='todolistbollet' key={todo.id}>
                  {todo.editing ? ( 
                      <input className='displayTodoListLI' 
                            type="text" 
                            defaultValue={todo.title} 
                            onBlur={(event) => dispatch({ type: "SAVE_TODO", payload: { id: todo.id, text: event.target.value } })} 
                            autoFocus/> 
                  ) : (
                    <input className='displayTodoListLI' defaultValue={todo.title}/>
                  )}
                    
                    <input className='todoCheckBox' 
                          type="checkbox" 
                          checked={todo.completed} // This marks the todo
                          onChange={() => dispatch({ type: "CHECKED_COMPLETE", payload: todo.id })} // dispatch -> Action type "CHECKED COMPLETED"
                          />
                    <div className='todoJobBTNsContainer'>
                        {!todo.editing && (
                          <>
                            <button className='editDeleteBTNS'
                                    onClick={() => dispatch({ type: "EDIT_TODO", payload: todo.id })} // Dispath -> Action type "EDIT_TODO"
                            >Edit</button>

                            <button className='editDeleteBTNS'
                                    onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })} // Dispatch -> Action type "DELETE_TODO"
                                    disabled={!todo.completed}
                            >Delete</button>
                          </>
                        )}
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
