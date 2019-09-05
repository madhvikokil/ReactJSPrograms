// Section 4
// Rendering Content Conditionally
//Handling Dynamic Conditionally "The JavaScript Way"
//Outputting List
//List and state
// Lists and key

import React ,{Component} from 'react'
import Person from '../Person';


class Day4 extends React.Component {



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
    }

      return (
       <div className="Day4">
         <h1> React JS</h1>
         
         <button 
            style = {style}
         onClick={this.togglePersonHandler}>Toggle</button>
        {/* ternary operator is used to check whether the showPerson is true or false and according to that it will work and onClick it calls the togglePersonHandler*/}
       {person}
       
       
       </div>
    )}
      }

  
export default Day4;