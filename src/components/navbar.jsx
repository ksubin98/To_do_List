import React, { Component } from 'react';

class Navbar extends Component {

  render() {
    return (
      <div className="navbar">
        <div className="logo">
        <i className="fa-solid fa-clipboard-list"></i>
        </div>
        <span className="title">To Do List</span>
        <span className="time-count">time</span>
      </div>
    );
  }
}

export default Navbar;