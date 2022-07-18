import React, { Component } from 'react';
import Navbar from './components/navbar';
import ToDoList from './components/toDoList';

class App extends Component {
  state = {
    list: [
      { id:1, name: 'programming study', time: 0 },
      { id:2, name: 'going to bank', time: 0 },
      { id:3, name: 'meeting friends', time: 0 }
    ],
  };
  handleIncrement = lists => {
    const list = [...this.state.list];
    const index = list.indexOf(lists);
    list[index].time += 5;
    this.setState({list});

  }
  
  handleDecrement = lists => {
    const list = [...this.state.list];
    const index = list.indexOf(lists);
    const time = list[index].time - 5;
    list[index].time = time < 0 ? 0 : time;
    this.setState({list});
  }

  handleCheckLine = (lists) => {
    console.log(`handleCheckLine ${lists}`)
  }
  render() {
    return (
      <>
        <Navbar totalCount={this.state.list.filter( item => item.time > 0).length} />
        <ToDoList list={this.state.list}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onCheckLine={this.handleCheckLine}
        />
      </>
    );
  }
}

export default App;

