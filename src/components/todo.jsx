import React, { Component } from 'react';

class Todo extends Component {
  state = {
    time: 0,
  }

  handleIncrement = () => {
    //this.state.count += 1 (X)
    this.setState({time: this.state.time + 5})
  }
  
  handleDecrement = () => {
    //this.state.count -= 1 (X)
    const time = this.state.time - 5;
    this.setState({time: time < 0 ? 0 : time })
  }

  render() {
    const {name, time} = this.props.lists;
    return (
      <li className="todo">
      <span className="todo-name">{name}</span>
      <span className="todo-time">{time}</span>
      <button className="todo-btn-incre" onClick={this.handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
      <button className="todo-btn-decre" onClick={this.handleDecrement}>
        <i className="fas fa-minus-square"></i>
      </button>
      <button className="todo-btn-check">
        <input type="checkbox" />
      </button>
      </li>
    );
  }
}

export default Todo;