import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {

  handleIncrement = habit => {
    this.props.onIncrement(habit);
  };

  handleDecrement = habit => {
    this.props.onDecrement(habit);
  };

  handleDelete = habit => {
    this.props.onDelete(habit); 
  };

  handleAdd = name => {
    this.props.onAdd(name);
  }


  render() {
    return ( // map - 배열을 돌면서 반환 : habit 이라는 오브젝트를 Habit 컴포넌트로 변환
      <> 
      <HabitAddForm onAdd={this.handleAdd}/>
        <ul>  
          {this.props.habits.map(habit => (
            <Habit 
              key={habit.id} 
              habit={habit} 
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            />
          ))}
      </ul>
      <button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
    </>    
    );
  }
}

export default Habits;