import React, { Component } from 'react';
import './App.css';
import Person  from "./Person/Person";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>hello</h1>
        <Person name="joynop" count="10"/>
        <Person name="josdfadfynop" count="99910"/>
        <Person />
        <Person />

      </div>
    );
  // return React.createElement('div',{className:'App'},React.createElement('h1',null,'hello') );
   }
  }

export default App;
