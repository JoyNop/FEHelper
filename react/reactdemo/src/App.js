import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";
class App extends Component {

  state = {
    persons: [
      { name: "aaaaa", count: 50 },
      { name: "aaaaa", count: 50 },
      { name: "aaaaa", count: 50 }

    ],
    otherState: "anything"
  }
  switchNameHandler = (newName) => {
    //console.log("hello")
    // DON'T DO this.state.persons[0].name="嘿嘿i";

    this.setState({
      persons:
        [
          { name: "a嘿嘿嘿aaaa", count: 509999 },
          { name: newName, count: 509999 }
        ]
    }
    )
  }
  render() {
    return (
      <div className="App">
        <h1>hello</h1>
        {/* <button onClick={()=>this.switchNameHandler("bing")}>更改状态值</button> */}
        <button onClick={this.switchNameHandler.bind(this, "misss")}>更改状态值</button>

        <Person name="joynop" count="10" />
        <Person name="josdfadfynop" count="999  10">thinks</Person>
        <Person name={this.state.persons[0].name} count={this.state.persons[0].count} />
        <Person name={this.state.persons[1].name} count={this.state.persons[1].count} />

        <Person />

      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'hello') );
  }
}

export default App;
