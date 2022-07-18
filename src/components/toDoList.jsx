import React, { Component } from 'react';
import DoAddform from './doAddform';
import Todo from './todo';

class ToDoList extends Component {

  handleAdd = doName => {
    this.props.onAdd(doName);
  }

  render() {
    return (
      <>
      <DoAddform onAdd={this.handleAdd}/>
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
      <button 
        className="resetBtn"
        onClick={this.props.onReset}
        >RESET</button>
      </>
    );
  }
}

export default ToDoList;