import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person'
import './Person.css'
import '../src/Day2/Hook'

// By using function 

// function App() {
//   return (
//     <div className="App">
//       <h1> React JS</h1>
//       <Person name="Madhvi" age="22"> </Person>
//       <Person name="Vaishnavi" age="21"> </Person>
//       <Person name="Bhagyashree" age="21"> </Person>
//       <Person name="Sonal" age="21"> </Person>
//     </div>
//   );
// }

// return (
//   <div className="App">
//     <h1> React JS</h1>
//     <Person name="Madhvi" age="22"> </Person>
//     <Person name="Vaishnavi" age="21"> </Person>
//     <Person name="Bhagyashree" age="21"> </Person>
//     <Person name="Sonal" age="21"> </Person>
//   </div>
// );


// By using class

class App extends React.Component {

    state = {
      person :[
        {name : "madhvi kokil",age : 10},
        {name : "vaishnavi jawanjal",age : 11},
        {name : "bhagyashree porwal",age : 11},
        {name : "sonal lamkane",age : 10},
      ]
    }

    switchData =(newData) =>{
      this.setState({
        person :[
          {name : "madhvi",age : 22},
          {name : "vaishnavi",age : 21},
          {name : newData,age : 21},
          {name : "sonal",age : 21},

        ]
      })
    }

  render(){
     return (
        <div className="App">
          <h1> React JS</h1>
          <button onClick={this.switchData.bind(this,"!!!!!")}>Switch</button>
          <Person name={this.state.person[0].name} age={this.state.person[0].age}> </Person>
          {/* want to change the data without the the button then we can do that by below syntax and doing the same in Person.js (here) */}
          <Person name={this.state.person[1].name} age={this.state.person[1].age} click={this.switchData.bind(this,"bhagyaa")}>  </Person> 
          <Person name={this.state.person[2].name} age={this.state.person[2].age} >Hello guys!!! </Person>
          <Person name={this.state.person[3].name} age={this.state.person[3].age}> </Person>
        </div>
     )}
}

export default App;
