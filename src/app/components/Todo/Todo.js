import React, { Component } from "react";


export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            completed: false

        };
    }
    render() {
        return (
            <div className="todo-individual">{this.state.value}<span>{this.state.completed? ">" : "X"}</span></div>
        );
    }
}