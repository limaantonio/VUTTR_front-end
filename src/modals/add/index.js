import React from 'react';

import './styles.css';

export default function Add(){
  return(
    <div className="cont">
      <h1>+ ADD new tool</h1>
      <div className="content"> 
        <input placeholder="Tool name"/>
        <input placeholder="Tool link"/>
        <textarea placeholder="Tool description"/>
        <input placeholder="Tags"/>
        <button id="btnAdd">Add tool</button>
      </div>
    </div>
  )
}

