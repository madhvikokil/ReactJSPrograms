import React ,{Component} from 'react'
import Radium ,{StyleRoot} from 'radium'

// With class we need to use this.props.variable_name

// class person extends Component{
//     render(){
//         return(
//             <div>
//                 <p> Hello!!! This is {this.props.name} and I am {this.props.age} years old.</p>
//             </div>
//         )
//     }
// }


// With normal function we need to use prop.variable_name
const person = (props) =>{
    const style ={
        '@media (min-width : 500px)' :{
            width :'600px'
           
        }
    }
    return(
        <div className ="person-style" style={style}>
            {/* here */}
            <p onClick={props.click}> Hello!!! This is {props.name} and I am {props.age} years old </p>
            <p >{props.children}</p>
             <input type="text"  onChange={props.changed} value={props.name}/> 
        </div>
    )
}

export default Radium(person);