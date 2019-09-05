// Section 5
// Setting Styles Dynamically Line no.123   apply 154
// Setting ClassName Dynamically Line no. 140 to 149    apply 153
// Adding and using Radium      (install the pankage)
// Using Radium for Media Queries  (import {StyleRoot})  Line no. 152 to 156

import React ,{Component} from 'react'
import Person from '../Person';
import '../App.css';
import Radium ,{StyleRoot} from 'radium';

class Day5 extends React.Component {


    state = {
      person :[
        {id : '123edf', name : "madhvi kokil",age : 10},
        {id : 'poi890', name : "vaishnavi jawanjal",age : 11},
        {id : 'po4ftg ',name : "bhagyashree porwal",age : 11},
        {id : 'seft65',name : "sonal lamkane",age : 10},
      ],
      // new key added
      showPerson : false
    }

    // for lists and state

    // switchData =(newData) =>{
    //   this.setState({
    //     person :[
    //       {name : "madhvi",age : 22},
    //       {name : "vaishnavi",age : 21},
    //       {name : 'bhagyashree',age : 21},
    //       {name : "sonal",age : 21},

    //     ]
    //   })
    // }

    deletePersonHandler =(personIndex) => {
        const person = this.state.person;       // mutable way
       // const person = [...this.state.person];            immutable way
        person.splice(personIndex,1);
        this.setState({person :person})
    }

    nameChangeHandler = (event,id) =>{

        const personIndex = this.state.person.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persond[personIndex]
        };

        person.name = event.target.value;
        const persons = [...this.state.person];
        persons[personIndex] = person;
        


                this.setState({persons : persons})  
    } 
             

    togglePersonHandler =() =>{
        const doesShow = this.state.showPerson;
        this.setState({showPerson: !doesShow});
    }

  render(){

    const style ={
        backgroundColor: 'green',
        font : 'inherit',
        border: ' 2px solid blue',
        ':hover':{
            backgroundColor : 'lightgreen',
            color:'yellow'
        }
     
    };

    // Rendering Content Conditionally

    // return (
    //    <div className="Day4">
    //      <h1> React JS</h1>
         
    //      <button 
    //         style = {style}
    //      onClick={this.togglePersonHandler}>Toggle</button>
    //     {/* ternary operator is used to check whether the showPerson is true or false and according to that it will work and onClick it calls the togglePersonHandler*/}
    //     { this.state.showPerson ? 
    //     <div>
    //      <Person name={this.state.person[0].name} age={this.state.person[0].age} changed={this.nameChangeHandler}> </Person>
    //      <Person name={this.state.person[1].name} age={this.state.person[1].age} click={this.switchData.bind(this,"bhagyaa")}>  </Person> 
    //      <Person name={this.state.person[2].name} age={this.state.person[2].age} >Hello guys!!! </Person>
    //      <Person name={this.state.person[3].name} age={this.state.person[3].age}> </Person>
    //      </div> : null 
    //      }
         
    //    </div>
    // )}


    // Handling Dynamic Content "The JavaScript Way"
  
    let person ;

    if(this.state.showPerson ) {
        console.log(this.state.showPerson)
        // another method to list down elements
        person = (
            <div>
                {this.state.person.map((per,index) => {
                    return <Person
                    click ={() => this.deletePersonHandler(index)}
                    name = {per.name}
                    age = {per.age} 
                    key = {per.id}
                    changes ={(event) =>this.nameChangeHandler(event,per.id)}/>
                })}
         {/* <Person name={this.state.person[0].name} age={this.state.person[0].age} changed={this.nameChangeHandler}> </Person>
         <Person name={this.state.person[1].name} age={this.state.person[1].age} click={this.switchData.bind(this,"bhagyaa")}>  </Person> 
         <Person name={this.state.person[2].name} age={this.state.person[2].age} >Hello guys!!! </Person>
         <Person name={this.state.person[3].name} age={this.state.person[3].age}> </Person> */}
            </div>
        

        );
        style.backgroundColor = 'red';      // Setting Style Dynamically
         style[':hover']= {
             backgroundColor :'salmon',
             color:'black'
         }
    }

    let dynamicClassname = ['purple ' ,'bold'].join(' ');   // Setting className Dynamically (purple-bold)

    let classes = [];                                      // another way of setting className Dynamically
    if(this.state.person.length <=2){
        classes.push('purple');
    }

    if(this.state.person.length <=1){
        classes.push('stylefont');
    }

      return (
          <StyleRoot>
       <div className="Day5">
         <h1 >  React JS</h1>
         <h4 className={classes.join(' ')} >Persons Data </h4>      
         <p className={dynamicClassname}>React is Working</p>
         
         <button 
            style = {style}
         onClick={this.togglePersonHandler}>Toggle</button>
        {/* ternary operator is used to check whether the showPerson is true or false and according to that it will work and onClick it calls the togglePersonHandler*/}
       {person}
       
       
       </div>
       </StyleRoot>
    )}
      }

  
export default Radium(Day5);