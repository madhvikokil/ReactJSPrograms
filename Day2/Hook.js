import React ,{useState} from 'react';
import Person from '../Person';


// Hook in react JS

const Hook = props => {
  const [personState, setPersonState] = useState({
        person : [
          {name : 'madhvi'},
          {name :'neha'}
        ]
      });

    const switchName = () => {
        setPersonState({
          person:[
            {name : "madhvi kokil"},
            {name : "neha soni"}
                  ]
        });
      };

  return (
    <div className="App">
      <h1> Hi This is react app</h1>
      <button onClick={switchName}> Switch Name </button>
      <Person name ={personState.person[0].name}> </Person>
      <Person name ={personState.person[1].name}> </Person>
    </div>
  );
  }



export default Hook;