import React, { Component } from 'react';
import DoAddform from './doAddform';
import Help from './help';
import Todo from './todo';

class ToDoList extends Component {

  handleAdd = doName => {
    this.props.onAdd(doName);
  }

  render() {
    return (
      <div className="todos">
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
        <Help />
      </div>
    );
  }
}

export default ToDoList;