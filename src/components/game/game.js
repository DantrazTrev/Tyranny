import React from 'react';
import axios from 'axios';

export default class Game extends React.Component {

  constructor(props) {
  super(props);

  this.tethy=this.tethy.bind(this);

  this.go=this.go.bind(this);
}
  
go(e){
  e.preventDefault();
  console.log("tmyk")

   axios.post(`https://the-butterfly.dantraztrev.repl.co/api/game/`,{name:this.state.name,complexity:2})
      .then(res => {
               console.log(res);
              this.setState({start:<div class="start"><div class="start-con" onClick={this.props.chars}>{res.data.status} at the alpha server</div></div>})
                     })
 

}
upday(e){
  e.preventDefault();
  console.log("tmyk")

   axios.get(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/upday/')
      .then(res => {
               console.log(res);
              this.setState({start:<div class="start"><div class="start-con" onClick={this.props.chars}>{res.data.status} at the alpha server</div></div>})
                     })
 

}
fight(e){
  e.preventDefault();
  console.log("tmyk")

   axios.get(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/fight/')
      .then(res => {
               console.log(res);
              this.setState({start:<div class="start"><div class="start-con" onClick={this.props.chars}>{res.data.status} at the alpha server</div></div>})
                     })
 

}
day(e){
  e.preventDefault();
  console.log("tmyk")

   axios.get(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/day/')
      .then(res => {
               console.log(res);
              this.setState({start:<div class="start"><div class="start-con" onClick={this.props.chars}>{res.data.status} at the alpha server</div></div>})
                     })
 

}
me(e){
  e.preventDefault();
  console.log("tmyk")

   axios.get(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/me/')
      .then(res => {
               console.log(res);
              this.setState({start:<div class="start"><div class="start-con" onClick={this.props.chars}>{res.data.status} at the alpha server</div></div>})
                     })
 

}
kar(e){
  e.preventDefault();
  console.log("tmyk")

   axios.get(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/kar/'+e.target.value)
      .then(res => {
               console.log(res);
              this.setState({start:<div class="start"><div class="start-con" onClick={this.props.chars}>{res.data.status} at the alpha server</div></div>})
                     })
 

}
undi(e){
  e.preventDefault();
  console.log("tmyk")

   axios.get(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/undi/'+e.target.value)
      .then(res => {
               console.log(res);
              this.setState({start:<div class="start"><div class="start-con" onClick={this.props.chars}>{res.data.status} at the alpha server</div></div>})
                     })
 

}
undi(e){
  e.preventDefault();
  console.log("tmyk")

   axios.get(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/undi/'+e.target.value)
      .then(res => {
               console.log(res);
              this.setState({start:<div class="start"><div class="start-con" onClick={this.props.chars}>{res.data.status} at the alpha server</div></div>})
                     })
 

}
di(e){
  e.preventDefault();
  console.log("tmyk")

   axios.get(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/di/'+e.target.value)
      .then(res => {
               console.log(res);
              this.setState({start:<div class="start"><div class="start-con" onClick={this.props.chars}>{res.data.status} at the alpha server</div></div>})
                     })
 

}
trusty(e){
  e.preventDefault();
  console.log("tmyk")

   axios.post(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/trusty/'+e.target.value,{trust:ver})
      .then(res => {
               console.log(res);
              this.setState({start:<div class="start"><div class="start-con" onClick={this.props.chars}>{res.data.status} at the alpha server</div></div>})
                     })
 

}
rewind(e){
  e.preventDefault();
  console.log("tmyk")

   axios.post(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/rewind/',{day:e.target.value})
      .then(res => {
               console.log(res);
              this.setState({start:<div class="start"><div class="start-con" onClick={this.props.chars}>{res.data.status} at the alpha server</div></div>})
                     })
 

}
disc(e){
  e.preventDefault();
  console.log("tmyk")

   axios.post(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.anme+'/disc/',{name:e.target.value})
      .then(res => {
               console.log(res);
              this.setState({start:<div class="start"><div class="start-con" onClick={this.props.chars}>{res.data.status} at the alpha server</div></div>})
                     })
 

}
inf(e){
  e.preventDefault();
  console.log("tmyk")

  axios.post(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.anme+'/inf/',{name:e.target.value})
      .then(res => {
               console.log(res);
              this.setState({start:<div class="start"><div class="start-con" onClick={this.props.chars}>{res.data.status} at the alpha server</div></div>})
                     })
 

}
tethy(e){
this.setState({name: e.target.value});

}
covere =(e)=>{
  this.setState({comple: e.target.value});
}


  

  render() {
      if(this.state.name !=="")
      {
        
      }
    
    return (
      <div class="Dez">
      <div class="butt">The Butterfly</div>
       {this.state.start}
     
    
        <form onSubmit={this.go}><p class="line-1 anim-typewriter">What should we call you? <input type="text"  placeholder="Dantra" value={this.state.name}  onChange={(e)=>{this.props.pen(e);this.tethy(e)}}/></p>  
        {/*<span class="ter">Complexity <input class="typeinp"  type="range" 
      min="0" max="5" 
      value={this.state.comple} 
      onChange={this.covere}
      step="1"/></span>*/}
       
</form>
      
      
      </div>
    )
  }
}
