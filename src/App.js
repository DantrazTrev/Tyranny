import React from 'react';
import './App.css';
import Star from './components/star/star.js';
import Dez from './components/dez/dez.js';

export default class App extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
      start : true,

    };
       
  }
  

sutrat=()=> {
  this.setState({start:false});
  console.log("Distra");
  }
susrat=<Star sutrat={this.sutrat}/> ;
render(){
  if(!this.state.start){
   this.susrat=<Dez/>;}
   else if(this.state.start)
   this.susrat=<Star sutrat={this.sutrat}/>
  
  return (
    <div className="App">
     {this.susrat}

    </div>
  );
}}

