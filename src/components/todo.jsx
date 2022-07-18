import React, { Component } from 'react';
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from 'react-icons/ai';
import {BsTrash} from 'react-icons/bs';

class Todo extends Component {

  handleIncrement = () => {
    this.props.onIncrement(this.props.lists); 
  }
  
  handleDecrement = () => {
    this.props.onDecrement(this.props.lists); 
  }

  handleCheckLine = () => {
    this.props.onCheckLine(this.props.lists); 
  }


  render() {
    const {name, time} = this.props.lists;
    return (
      <li className="todo">
      <span className="todo-name">{name}</span>
      <span className="todo-time">{time}</span>
      <button 
        className="todo-btn-incre" 
        onClick={this.handleIncrement}>
        <AiOutlinePlusCircle />
      </button>
      <button 
        className="todo-btn-decre" 
        onClick={this.handleDecrement}>
       <AiOutlineMinusCircle />
      </button>
      <button 
        className="todo-btn-check" 
        onClick={this.handleCheckLine}>
          <BsTrash />
      </button>
      </li>
    );
  }
}

export default Todo;