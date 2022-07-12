import React, { Component } from 'react';
import Todo from './todo';

class ToDoList extends Component {
  state = {
    list: [
      { name: 'programming study', time: 0 },
      { name: 'going to bank', time: 0 },
      { name: 'meeting friends', time: 0 }
    ],
  };
  render() {
    return (
      <ul>
        { this.state.list.map(lists => (
            <Todo lists={lists}/>
        ))
          }
      </ul>
    );
  }
}

export default ToDoList;