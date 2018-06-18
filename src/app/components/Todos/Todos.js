import React, { Component } from "react";
import Todo from '../Todo/Todo';

export default class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render () {
        return (
            <Todo />
        );
    }
}