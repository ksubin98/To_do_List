import React, { Component } from 'react';
import Todo from './todo';

class ToDoList extends Component {

  render() {
    return (
      <div className="list">
      <ul>
        { this.props.list.map(lists => (
            <Todo 
              key={lists.id} 
              lists={lists}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onCheckLine={this.props.onCheckLine}
            />
        ))
          }
      </ul>
      </div>
    );
  }
}

export default ToDoList;