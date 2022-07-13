import React, { Component } from 'react';

class Todo extends Component {
  
  handleIncrement = () => {
    this.props.onIncrement(this.props.lists); 
  }
  
  handleDecrement = (lists) => {
    this.props.onDecrement(this.props.lists); 
  }

  handleCheckLine = (lists) => {
    this.props.onCheckLine(this.props.lists); 
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
      <button className="todo-btn-check" onClick={this.handleCheckLine}>
        <input type="checkbox" />
      </button>
      </li>
    );
  }
}

export default Todo;