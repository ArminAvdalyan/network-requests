import React, {Component} from "react";

import {getAllTodos} from "api/requestData";

export class Todo extends Component {

  state = {
    todos: []
  }

  componentDidMount() {
    getAllTodos()
    .then(data => {
      this.setState({
        todos: data
      })
    })
  }
  render() {
    return (
      <div>
        Todo
      </div>
    )
  }
}
export default Todo;