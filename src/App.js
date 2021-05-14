import React from 'react';
import './App.css';
import Star from './components/star/star.js';
import Dez from './components/dez/dez.js';
import Charchi from './components/dez/char/char.js';


export default class App extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
      start : "start",
      name:"",
      char:[],
      choice:[],

    };
       
  }
  
penolope=(e)=>{
this.setState({name: e.target.value});

}
chica=(e)=>{
  this.setState({start:"char"})
}

sutrat=()=> {
  this.setState({start:"user"});
  console.log("Distra");
  }
susrat=<Star sutrat={this.sutrat}/> ;
render(){
   if(this.state.start==="start")
   this.susrat=<Star sutrat={this.sutrat}/>
  else if(this.state.start==="user"){
   this.susrat=<Dez pen={this.penolope} chars={this.chica}/>;}
   else if(this.state.start==="char"){
   this.susrat=<Charchi name={this.state.name} chars={this.chica}/>;}
   
  
  
  return (
    <div className="App">
     {this.susrat}

    </div>
  );
}}

