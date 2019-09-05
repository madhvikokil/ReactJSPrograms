// Adding two way binding
// Working with inline Styles

import React ,{Component} from 'react'
import Person from '../Person';


class Day3 extends React.Component {

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
          {name : 'bhagyashree',age : 21},
          {name : "sonal",age : 21},

        ]
      })
    }

    nameChangeHandler = (event) =>{
        this.setState({
            person :[
                {name : event.target.value,age:28},
                {name : 'vaishnavi' ,age:21},
                {name : 'bhagyashree',age : 21},
                {name : "sonal",age : 21},
      
            ]
        })
    }


  render(){

    const style ={
        backgroundColor: 'green',
        font : 'inherit',
        border: ' 2px solid blue',
     
    };

    return (
       <div className="Day3">
         <h1> React JS</h1>
         
         <button 
            style = {style}
         onClick={this.switchData.bind(this,"!!!!!")}>Switch</button>
         <Person name={this.state.person[0].name} age={this.state.person[0].age} changed={this.nameChangeHandler}> </Person>
         {/* want to change the data without the the button then we can do that by below syntax and doing the same in Person.js (here) */}
         <Person name={this.state.person[1].name} age={this.state.person[1].age} click={this.switchData.bind(this,"bhagyaa")}>  </Person> 
         <Person name={this.state.person[2].name} age={this.state.person[2].age} >Hello guys!!! </Person>
         <Person name={this.state.person[3].name} age={this.state.person[3].age}> </Person>
       </div>
    )}
}
  
export default Day3;