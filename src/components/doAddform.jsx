import React, { Component } from 'react';
import {MdOutlinePlaylistAddCheck} from "react-icons/md";

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
        <button className="addBtn"><MdOutlinePlaylistAddCheck size="25"/></button>
      </form>
    );
  }
}

export default DoAddform;