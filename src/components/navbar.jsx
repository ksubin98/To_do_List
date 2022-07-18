import React, { Component } from 'react';
import {AiFillEdit} from 'react-icons/ai';

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar">
        <AiFillEdit className="logo" size="45"/>
        <span className="title">To Do List </span>
        <span className="count">{this.props.totalCount}</span>
      </nav>
    );
  }
}

export default Navbar;