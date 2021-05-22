import React from 'react';
import axios from 'axios';

export default class Game extends React.Component {

  constructor(props) {
  super(props);
  this.state={
    status:null,
    me:'',
  }

}

 


upday=(e)=>{
  e.preventDefault();
  console.log("tmyk")

   axios.get(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/upday')
      .then(res => {
               console.log(res);
                 this.me();
                
                     })
 

}
fight=(e)=>{
  e.preventDefault();
  console.log("tmyk")

   axios.get(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/fight')
      .then(res => {
               console.log(res);
                
                     })
 

}
day=(e)=>{
  e.preventDefault();
  console.log("tmyk")

   axios.get(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/day')
      .then(res => {
               console.log(res);
                
                     })
 

}
me=(e)=>{
  axios.get(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/me')
      .then(res => {
        console.log(res.data.Playerop)
             const statli=Object.keys(res.data.Playerop).map((ker,i)=>{return(<div className="stat" id={i} >{ker}:{res.data.Playerop[ker]}</div>)})
               this.setState({me:<div className="stats">{statli}</div>})
                    })
 

}
kar=(e)=>{
  e.preventDefault();
  console.log("tmyk")

   axios.get(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/kar/'+e.target.value)
      .then(res => {
               console.log(res);
                
                     })
 

}
undi=(e)=>{
  e.preventDefault();
  console.log("tmyk")

   axios.get(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/undi/'+e.target.value)
      .then(res => {
               console.log(res);
                
                     })
 

}
di(e){
  e.preventDefault();
  console.log("tmyk")

   axios.get(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/di/'+e.target.value)
      .then(res => {
               console.log(res);
                
                     })
 

}
die(e){
  e.preventDefault();
  console.log("tmyk")

   axios.get(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/di/'+e.target.value)
      .then(res => {
               console.log(res);
                
                     })
 

}
trusty(e){
  e.preventDefault();
  console.log("tmyk")

   axios.post(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/trusty/'+e.target.value,{trust:1})
      .then(res => {
               console.log(res);
                
                     })
 

}
rewind(e){
  e.preventDefault();
  console.log("tmyk")

   axios.post(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/rewind/',{day:e.target.value})
      .then(res => {
               console.log(res);
                
                     })
 

}
disc(e){
  e.preventDefault();
  console.log("tmyk")

   axios.post(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/disc/',{name:e.target.value})
      .then(res => {
               console.log(res);
                
                     })
 

}
inf(e){
  e.preventDefault();
  console.log("tmyk")

  axios.post(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/inf/',{name:e.target.value})
      .then(res => {
               console.log(res);
                
                     })
 

}
 componentDidMount(){
 axios.get(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/me')
      .then(res => {
        console.log(res.data.Playerop)
             const statli=Object.keys(res.data.Playerop).map((ker,i)=>{return(<div className="stat" id={i} >{ker}:{res.data.Playerop[ker]}</div>)})
               this.setState({me:<div className="stats">{statli}</div>})
                    })
  }

  

  render() {
    const buttonli={}
      if(this.state.name !=="")
      {
        
      }
    
    return (
      <div className="Game"> 
      {this.state.me}
        {this.state.status}
        <div className="Buttonclass">
        <button onClick={this.upday}>Upday</button>
         <button onClick={this.di}>Distance</button>
          <button onClick={this.undi}>Undistance</button>
           <button onClick={this.rewind}>Rewind</button>
           </div>
      </div>
    )
  }
}
