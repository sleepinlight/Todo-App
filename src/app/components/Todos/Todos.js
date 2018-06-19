import React, { Component } from "react";
import Todo from '../Todo/Todo';

export default class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
          todoitems: ["Dishes", "Mop", "Windows"],
        };
      }
      render() {
        return (
          <div>
            {this.state.todoitems.map((task, index) => (
                <Todo todoitem={task} key={index}/>
            ))}
            <input type="text" id="myinput" value={this.props.value}/>
           <button onClick={this.addTodo}>Click </button>
          </div>
        );
      }
      addTodo = (abc) => {
        this.setState((state) => ({todoitems: this.state.todoitems.concat("abc")}));
      }
}

 