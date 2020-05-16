import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Greet from './components/Greet'
// import Welcome from './components/Welcome'
// import Hello from './components/Hello'
// import Message from './components/Message'
// import Counter from './components/Counter'
// import Props1 from './components/Props1'
// import State from './components/State'
// import Setstate from './components/Setstate'
// import Functionclick from './components/Functionclick';
// import Classclick from './components/Classclick';
// import Eventbind from './components/Eventbind';

// import Index from './Piaictodo/Index';
import Todo from './Todo App/Todo';



// import {Greet} from './components/Greet' == yeh hoga custome name ke zarye agr krna ho to

function App() {
  return (
    <div className="App">

     {/* <Counter /> */}
      {/* <Props1 name="saqib" lang="English" profession="Developer" /> */}
       {/* <Greet name="Brute" heroName="superman" > 
      <p>This is a children props</p>
      </Greet>
      <Greet name="clark" heroName="Wonder Women">
       <button>Action</button> 
      </Greet>
      <Greet  name="diana"/>
      <Welcome name="Brute" heroName="superman" />
      <Welcome name="clark" heroName="Wonder Women" />
      <Welcome name="diana" />

     <Hello />   */}
   {/* <State roll="102" /> */}
   {/* <Setstate /> */}
   {/* <Functionclick />  */}
   {/* <Classclick /> */}
   {/* <Eventbind /> */}
  
  <Todo />

         {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> }   */}
     </div>
  );
}

export default App;
