import React, { PureComponent } from 'react';

class Habit extends PureComponent {
  // component에는 하나의 데이터만 가지고 있다
  // 데이터를 넣기 위해서 state를 사용
  state = {
    count: 0
  };

  handleIncrement = () => { //Arrow_function은 이벤트를 받아서 Increment를 처리
    //state 오브젝트 안에 있는 count를 증가한 뒤 state를 업데이트 해야함
    //state를 업데이트 하기 위해서는 setState라는 함수를 꼭 이용해야함 (부분적 업데이트 불가능)
    this.props.onIncrement(this.props.habit);
    //react 홈페-> handling events - 간단하게 이벤트를 어떻게 처리할 수 있는지 확인 가능
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
      <span className="habit-name">{name}</span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={this.handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
      <button className="habit-button habit-decrease" onClick ={this.handleDecrement}>
        <i className="fas fa-minus-square"></i>
      </button>
      <button className="habit-button habit-delete" onClick = {this.handleDelete}>
        <i className="fas fa-trash"> </i>
      </button>
      </li>
    );
  }
}

export default Habit;