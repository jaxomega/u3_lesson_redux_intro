const AddTodo = (todo) => ({
    type: 'ADD_TODO',
    payload: todo
  })
  const NewTodo = (todo) => ({
    type: 'NEW_TODO',
    payload: todo
  })
  const RemoveTodo = (todo) => ({
    type: 'REMOVE_TODO',
    payload: todo
  })
  const CreateTodo = (todo) => ({
    type: 'CREATE_TODO',
    payload: todo
  })
  export const ADD_TODO = 'ADD_TODO'
  export const NEW_TODO = 'NEW_TODO'
  export const REMOVE_TODO = 'REMOVE_TODO'
  export const CREATE_TODO='CREATE_TODO'