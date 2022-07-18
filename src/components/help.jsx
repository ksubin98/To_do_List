import React, { Component } from 'react';
import {AiFillQuestionCircle, AiOutlineQuestionCircle} from 'react-icons/ai';
import ReactTooltip from 'react-tooltip';

class Help extends Component {
  render() {
    return (
      <>
      <button data-for="helpText" data-tip>
        <AiFillQuestionCircle/>
      </button>
      <ReactTooltip 
        id="helpText"
        getContent={dataTip => "공부 전용 To do List 입니다."}
        />
      </>
    );
  }
}

export default Help;