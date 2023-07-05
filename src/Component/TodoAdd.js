import React, { Component } from "react";
import TodoList from "./TodoList";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoName: "",
      todos: []
    };
  }

  handleOnChange = (e) => {
    this.setState({ todoName: e.target.value });
    console.log(this.state.todoName);
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    let todo = { name: this.state.todoName };

    this.setState({
      todos: [...this.state.todos, todo],
      todoName: ""
    });

  };

  render() {

    return (
      < >
        <div className="">
          <input
            type="text"
            name="todoName"
            placeholder="Enter todo details.."
            value={this.state.todoName}
            onChange={this.handleOnChange}
            style={{
              color: 'black',
              padding: '5px',
              width: '200px',
              border: 'black ',
              borderRadius: '5px',
              margin: '10px'
            }}
          />

          <button className="btn" onClick={this.handleOnSubmit}
            style={{
              padding: '8px',
              margin: "10px",
              background: 'black',
              color: 'white'
            }}>Add</button>


          <div
            style={{ width: '20px' }}>

            <TodoList data={this.state.todos} />
          </div>

          {/* <ul>{todoList}</ul> */}
        </div>

      </>
    );
  }
}

export default AddTodo;