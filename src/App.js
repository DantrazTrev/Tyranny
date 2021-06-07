import React from 'react';
import './App.css';
import Star from './components/star/star.js';
import Dez from './components/dez/dez.js';
import Charchi from './components/dez/char/char.js';
import Game from './components/game/game.js';
import axios from 'axios'

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
jet3=(a,b)=>{
this.setState({char: a,choice:b});

}

muchahcah=()=>{
 this.setState({start:"game"})  
}

chica=(e)=>{
  this.setState({start:"char"})
}

sutrat=()=> {
  this.setState({start:"user"});
  console.log("Distra");
  }

bye = (e)=>{
if(this.state.name!==""){
  axios.get(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.state.name+'/quit')
      .then(res => {
               console.log(res);
              })}
}

componentDidMount(){
   window.addEventListener('beforeunload', this.bye);
}

susrat=<Star sutrat={this.sutrat}/> ;
render(){
   if(this.state.start==="start"){
   this.susrat=<Star sutrat={this.sutrat}/>}
  else if(this.state.start==="user"){
   this.susrat=<Dez pen={this.penolope} chars={this.chica}/>;}
   else if(this.state.start==="char"){
   this.susrat=<Charchi name={this.state.name} config={this.jet3} game={this.muchahcah}/>;}
   else if(this.state.start==="game"){
this.susrat=<Game chars={this.state.char} choi={this.state.choice} name={this.state.name} />;}
   
   
  
  
  return (
    <div className="App">
     {this.susrat}

    </div>
  );
}}

