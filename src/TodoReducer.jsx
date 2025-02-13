  // The todoReducer function to update the state according to the action types
  export default function todoReducer(state, action) {

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