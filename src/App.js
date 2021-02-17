import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
     <h1 className="">Welcome to the world of React.js</h1>
     <p className="ss">Hello ReactJS</p>
     <h4 className="">Welcome all</h4>
     {/* Components: It is considered as the core building blocks of an application. It makes the task of building UIs much easier.
     Every component have thier own structure, methods as well as the APIs. They can be reusable as per the need.
     Two types of Components are: 
     1. Functional Component: it contains a render method and dont have their won state
     2. Class Component: 
     */}
     <Home/>
    </div>
  );
}

export default App;
