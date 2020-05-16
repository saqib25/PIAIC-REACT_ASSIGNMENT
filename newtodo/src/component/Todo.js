import React, { Component } from 'react'
const Todo = (props) => {
    return(

      <div className='list-item'>
        <ul>
        <li>      
        {props.content}
        <button className="btn btn-sm btn-danger mx-3 mt-2" onClick={() => {props.onDelete(props.id)}}>Delete</button>

        </li>
        </ul>
      </div>
    );
  }

export default Todo