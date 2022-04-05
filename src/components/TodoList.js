import { connect } from 'react-redux'
import TodoForm from './TodoForm'
import { AddTodo, RemoveTodo, CreateTodo } from '../store/actions/TodoActions'

const TodoList = (props) => {
  console.log(props)

  const handleChange = (event) => {
    props.createTodo(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.addTodo(props.todoState.CreateTodo)
  }

  return (
    <div>
      <TodoForm
        newTodo={props.todoState.newTodo}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {props.todoState.todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </div>
  )
}

const mapStateToProps = (state) => {
  //   console.log(state)
  return {
    todoState: state.todoState
  }
}

const mapActionsToProps = (dispatch) => {
  return {
    addTodo: (newTodo) => dispatch(AddTodo(newTodo)),
    removeTodo: (index) => dispatch(RemoveTodo(index)),
    createTodo: (formValue) => dispatch(CreateTodo(formValue))
  }
}

export default connect(mapStateToProps, mapActionsToProps)(TodoList)