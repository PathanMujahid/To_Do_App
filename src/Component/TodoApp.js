import React, { Component } from "react";
import TodoAdd from "./TodoAdd";
import Header from "./Header";


class TodoApp extends Component {
    render() {
        return (

            <div style={{
                background: "yellow",
                textAlign: "center",
                width: '300px',
                padding: '70px',
                margin: "",
                display: 'flex',
                flexDirection: 'column',
                height: "70vh",
                alignItems: 'center',
                border: "solid red 5px",
                borderRadius: "5px",
                marginLeft: '415px'

            }}>
                <Header />
                <TodoAdd />
            </div >


        );
    }
}

export default TodoApp;