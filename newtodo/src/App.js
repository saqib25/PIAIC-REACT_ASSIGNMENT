import React, { Component } from 'react'
import Header from "./component/Header"
import TodoList from "./component/TodoList"
import SubmitForm from "./component/SubmitFrom"

class App extends Component {
  state = { tasks: [] };
  render() {
    return (
      <div className="container">
        <div>
        <Header numTodos={this.state.tasks.length} />
        <SubmitForm onFormSubmit={this.handleSubmit} />
        <TodoList tasks={this.state.tasks} onDelete={this.handleDelete} />
        </div>
      </div>
    )
  }
  handleSubmit = task => {
    this.setState({tasks: [...this.state.tasks, task]});
}
  handleDelete = (index) => {
    const newArr = [...this.state.tasks];
    newArr.splice(index, 1);
    this.setState({tasks: newArr});
}
}
export default App 