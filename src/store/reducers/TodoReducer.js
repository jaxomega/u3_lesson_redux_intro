import { ADD_TODO, NEW_TODO, REMOVE_TODO, CREATE_TODO } from '../types'

const initialState = {
  todos: ['Make Memes'],
  newTodo: ''
}

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload], newTodo: '' }
    case NEW_TODO:
      return { ...state, newTodo: action.payload }
    case REMOVE_TODO:
      return { ...state, removeTodo: action.payload }
    case CREATE_TODO:
      return { ...state, todos: [...state.todos, action.payload], newTodo: '' }
    default:
      return { ...state }
  }
}

export default TodoReducer