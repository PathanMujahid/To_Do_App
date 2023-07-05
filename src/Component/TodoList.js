import React, { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log("List", this.props);
    let todoList = this.props.data.map((todo) => {
      return <li>{todo.name}</li>;
    });
    return (
      <>
        <ul>{todoList}</ul>
      </>
    );
  }
}

export default TodoList;