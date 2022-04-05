import { ADD_TODO } from '../types'

export const AddTodo = (todo) => ({
  type: 'ADD_TODO',
  payload: todo
})
export const NewTodo = (todo) => ({
  type: 'NEW_TODO',
  payload: todo
})
export const RemoveTodo = (todo) => ({
  type: 'REMOVE_TODO',
  payload: todo
})
export const CreateTodo = (todo) => ({
  type: 'CREATE_TODO',
  payload: todo
})