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
              this.setState({start:<div className="start"><div className="start-con" onClick={this.props.chars}>{res.data.status} at the alpha server</div></div>})
                     })
 

}
fight=(e)=>{
  e.preventDefault();
  console.log("tmyk")

   axios.get(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/fight')
      .then(res => {
               console.log(res);
              this.setState({start:<div className="start"><div className="start-con" onClick={this.props.chars}>{res.data.status} at the alpha server</div></div>})
                     })
 

}
day=(e)=>{
  e.preventDefault();
  console.log("tmyk")

   axios.get(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/day')
      .then(res => {
               console.log(res);
              this.setState({start:<div className="start"><div className="start-con" onClick={this.props.chars}>{res.data.status} at the alpha server</div></div>})
                     })
 

}
me=(e)=>{
  e.preventDefault();
  console.log("tmyk")

   axios.get(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/me')
      .then(res => {
               console.log(res);
              this.setState({start:<div className="start"><div className="start-con" onClick={this.props.chars}>{res.data.status} at the alpha server</div></div>})
                     })
 

}
kar=(e)=>{
  e.preventDefault();
  console.log("tmyk")

   axios.get(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/kar/'+e.target.value)
      .then(res => {
               console.log(res);
              this.setState({start:<div className="start"><div className="start-con" onClick={this.props.chars}>{res.data.status} at the alpha server</div></div>})
                     })
 

}
undi=(e)=>{
  e.preventDefault();
  console.log("tmyk")

   axios.get(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/undi/'+e.target.value)
      .then(res => {
               console.log(res);
              this.setState({start:<div className="start"><div className="start-con" onClick={this.props.chars}>{res.data.status} at the alpha server</div></div>})
                     })
 

}
di(e){
  e.preventDefault();
  console.log("tmyk")

   axios.get(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/di/'+e.target.value)
      .then(res => {
               console.log(res);
              this.setState({start:<div className="start"><div className="start-con" onClick={this.props.chars}>{res.data.status} at the alpha server</div></div>})
                     })
 

}
die(e){
  e.preventDefault();
  console.log("tmyk")

   axios.get(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/di/'+e.target.value)
      .then(res => {
               console.log(res);
              this.setState({start:<div className="start"><div className="start-con" onClick={this.props.chars}>{res.data.status} at the alpha server</div></div>})
                     })
 

}
trusty(e){
  e.preventDefault();
  console.log("tmyk")

   axios.post(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/trusty/'+e.target.value,{trust:1})
      .then(res => {
               console.log(res);
              this.setState({start:<div className="start"><div className="start-con" onClick={this.props.chars}>{res.data.status} at the alpha server</div></div>})
                     })
 

}
rewind(e){
  e.preventDefault();
  console.log("tmyk")

   axios.post(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/rewind/',{day:e.target.value})
      .then(res => {
               console.log(res);
              this.setState({start:<div className="start"><div className="start-con" onClick={this.props.chars}>{res.data.status} at the alpha server</div></div>})
                     })
 

}
disc(e){
  e.preventDefault();
  console.log("tmyk")

   axios.post(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/disc/',{name:e.target.value})
      .then(res => {
               console.log(res);
              this.setState({start:<div className="start"><div className="start-con" onClick={this.props.chars}>{res.data.status} at the alpha server</div></div>})
                     })
 

}
inf(e){
  e.preventDefault();
  console.log("tmyk")

  axios.post(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/inf/',{name:e.target.value})
      .then(res => {
               console.log(res);
              this.setState({start:<div className="start"><div className="start-con" onClick={this.props.chars}>{res.data.status} at the alpha server</div></div>})
                     })
 

}
 componentDidMount(){
 axios.get(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/me')
      .then(res => {
               console.log(res);
              this.setState({me:<div className="Me"><div className="start-con" onClick={this.props.chars}>{res.data.status} at the alpha server</div></div>})
                     })
  }

  

  render() {
      if(this.state.name !=="")
      {
        
      }
    
    return (
      <div className="Game"> 
      {this.state.me}
        {this.state.status}
        <button onClick={this.upday}>Upday</button>
      
      </div>
    )
  }
}
