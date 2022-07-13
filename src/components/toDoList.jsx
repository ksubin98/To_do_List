import React, { Component } from 'react';
import Todo from './todo';

class ToDoList extends Component {
  
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
    return (
      <ul>
        { this.props.list.map(lists => (
            <Todo 
              key={lists.id} 
              lists={lists}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onCheckLine={this.handleCheckLine}
            />
        ))
          }
      </ul>
    );
  }
}

export default ToDoList;