import React, { Component } from 'react'

const Header = (props) => {
    return(
      <div className="text-center">
        <h1>
          You have {props.numTodos} Todos
        </h1>
      </div>
    )
  }
export default Header