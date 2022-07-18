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
      <div>
      <li className="todo">
      <span className="todo-name">{name}</span>
      <span className="todo-time">{time}m</span>
      <button 
        className="todo-btn-incre" 
        onClick={this.handleIncrement}>
        <AiOutlinePlusCircle size="18"/>
      </button>
      <button 
        className="todo-btn-decre" 
        onClick={this.handleDecrement}>
       <AiOutlineMinusCircle size="18"/>
      </button>
      <button 
        className="todo-btn-de" 
        onClick={this.handleCheckLine}>
          <BsTrash size="18"/>
      </button>
      </li>
      </div>
    );
  }
}

export default Todo;