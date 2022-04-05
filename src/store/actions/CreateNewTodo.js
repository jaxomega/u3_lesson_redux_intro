import { NEW_TODO } from '../types'

export const NewTodo = (todo) => ({
  type: 'NEW_TODO',
  payload: todo
})

export default NewTodo