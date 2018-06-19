import React, { Component } from "react";

const Todo = (props) => {
    return (
        <div className="todo-individual">{props.todoitem}<span>{props.completed? ">" : "X"}</span></div>
    );
}

export default Todo;