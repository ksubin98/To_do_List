import React, { Component } from 'react';

class DoAddform extends Component {

  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const doName = this.inputRef.current.value;
    doName && this.props.onAdd(doName);
    this.inputRef.current.value = '';
  };

  render() {
    return (
      <form className="addForm" onSubmit={this.onSubmit}>
        <input 
          ref={this.inputRef}
          className="addInput"
          type="text"
          placeholder="Add To do"></input>
        <button className="AddBtn">Add</button>
      </form>
    );
  }
}

export default DoAddform;