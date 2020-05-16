import React, { Component } from 'react';
// import './App.css';
import Length from './Length'

class App extends React.Component{
	state = {
		todos:[],
		ctodo:''
	}
	addtodo = () => {
        let c = this.state.todos.slice();
       
		c.push(this.state.ctodo);
		this.setState({
			todos:c,
			ctodo:''
		});
	}
	handleChange = (e) => {
		this.setState({ctodo:e.target.value});
	}
	deletetodo = (i) => {
		let d = this.state.todos.slice();
		d.splice(i,1);
		this.setState({
			todos:d,
			ctodo:''
		});
	}
	render(){
		let b = this.state.todos.map((e,i) => {
			return(
				<li key={i} ><h1>{e}<button className="btn btn-danger" onClick={() =>{this.deletetodo(i)}}>X</button></h1></li>
		);
	});
  	return(
    	<div className="container" id="cont1">
			<center><h1>Todo App :)</h1></center><br></br>
				<div className="row">
				<div className="col-md-10">
        <input type="text" value={this.state.ctodo} onChange={this.handleChange} placeholder="enter a new todo :)" className="form-control" />
				</div>
				<div className="col-md-2">
				<button className="btn btn-success" onClick={this.addtodo}>Add Todo</button>
				</div></div>
				<br></br>
           {/* <Length numTodos={this.state.tasks.length /> */}
                 <ul>{b}</ul>
    	</div>
    );
  }
}

export default App;
