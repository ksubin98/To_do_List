import React, { Component } from 'react';
import Navbar from './components/navbar';
import ToDoList from './components/toDoList';

class App extends Component {
  state = {
    list: [
      { id:1, name: 'programming study', time: 0, checked:false },
      { id:2, name: 'going to bank', time: 0, checked:false },
      { id:3, name: 'meeting friends', time: 0, checked:false }
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

  handleDelete = lists => {
    const list = this.state.list.filter(item => item.id !== lists.id);
    this.setState({ list });
  };

  handleAdd = doName => {
    const list = [...this.state.list, {id: Date.now(), name: doName, time:0 }]
    this.setState({list});
  }

  handleReset = () => {
    const list = this.state.list.map(lists => {
      lists.time = 0;
      return lists;
    })
    this.setState({list})
  }

  render() {
    return (
      <>
        <Navbar totalCount={this.state.list.filter( item => item.time > 0).length} />
        <ToDoList list={this.state.list}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onCheckLine={this.handleCheckLine}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;

