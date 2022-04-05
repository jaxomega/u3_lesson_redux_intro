import { REMOVE_TODO } from '../types'

export const RemoveTodo = (todo) => ({
  type: 'REMOVE_TODO',
  payload: todo
})

export default RemoveTodo