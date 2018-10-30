import React, { Component} from 'react';


import ReactDOM from 'react-dom';
import './App.css';

import Person from "./Person/Person";
import Excel from "./Person/Excel";
import Suggest from "./Person/Suggest";



class App extends Component {

  state = {
    persons: [
      { name: "aaaaa", count: 50 },
      { name: "aaaaa", count: 50 },
      { name: "aaaaa", count: 50 }

    ],
    otherState: "anything",
    texts: "1",
    data: [

      "aaa", "asdf", "dfas"

    ],
    value:"stay"
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
  textChange = (event) => {
    // this.setState({
    //   texts:aaa,
    // })

    this.setState({ texts: event.target.value });
    console.log(this.state.texts)
    console.log("---------");

    // this._log('componentWillUpdate');

    // componentDidUpdate = () => {
    //   this._log('componentDidUpdate');

    // }
    // componentWillMount = () => {
    //   this._log('componentWillMount');
    // }

  }

  appNode = () => {
    var reactAppnode = ReactDOM.findDOMNode(this.App);
    console.log(reactAppnode)
  }

  _log = (methodName, args) => {
    console.log(methodName, args);
  }

  getInitialState=()=>{

    return {value:'move'};
  }

  _onChange=(event)=>{
    this.setState({value:event.target.value});
    console.log(this.state.value);
  }

  render() {
 

    return (

      <div className="App">
        <h1>hello</h1>
        <Suggest options={['eenie', 'meenie','hei', 'miney', 'mo']} />





        {/* <button onClick={()=>this.switchNameHandler("bing")}>更改状态值</button> */}
        <button onClick={this.switchNameHandler.bind(this, "misss")}>更改状态值</button>

        <Person name="joynop" count="10" />
        <Person name="josdfadfynop" count="999  10">thinks</Person>
        <Person name={this.state.persons[0].name} count={this.state.persons[0].count} />
        <Person name={this.state.persons[1].name} count={this.state.persons[1].count} />

        <Person />
        <textarea id="mytext" defaultValue={"Hello\nworld"} onChange={this.textChange}></textarea>
        <p>输入的数值为：{this.state.texts}，输入总长度：{this.state.texts.length}</p>
        <button onClick={() => console.log(234)}> console</button>
        <button onClick={() => alert(234)}> alert</button>
        <button onClick={this.appNode}> appNode</button>
        <div style={{ fontSize: '2em' }}>hello world</div>
        <input id="i" defaultValue='hello'></input>
        {/* <Excel /> */}
        <select defaultValue="move">
          <option value="stay">should i stay</option>
          <option value="move">or should i go</option>
          <option value="trouble">if i stay it well be trouble</option>
        </select>
        <p>-----------</p>


        <select defaultValue={["move","stay"]} multiple={true}>
          <option value="stay">should i stay</option>
          <option value="move">or should i go</option>
          <option value="trouble">if i stay it well be trouble</option>
        </select>

        <p>-----------</p>


        <select defaultValue={this.state.value} onChange={this._onChange}>
          <option value="stay">should i stay</option>
          <option value="move">or should i go</option>
          <option value="trouble">if i stay it well be trouble</option>
        </select>

        <p>-----------</p>

        <Excel></Excel>
      </div>

    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'hello') );
  }

}

export default App;
