// import React, { Component } from 'react';
// import Content from './Content';
// import Productlist from './Productlist';
// // import Product from './Product'; 

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       data: 0
//     }
//   }

//   setNewNumber= () => {
//     this.setState({data: this.state.data+1})
//   }
//   render() {
//     return (
//       <div className="App">
//         <button onClick = {this.setNewNumber}>INCREMENT</button>
//         <Content myNumber = {this.state.data}></Content>
//         <Productlist/>
//       </div>
//     );
//   }
// }

// export default App;


import React ,{Component} from "react";
import SinglePerson from "./SinglePerson";
export default class App extends Component{
  state = {
      persons:[{
        id:1,
        name: "method",
        email:"theemail@gmail.com",
      },{
        id:2,
        name:"name",
        email:"theemail2",
      },{
        id:3,
        name:"name3",
        email:"theemail3",
      }]
    
  }

  render(){
    const persons= this.state.person.map(person=>(<SinglePerson key={person.id}person={person}/>))
    return(
      <div>
      {persons}
      </div>
    );
  }
}

