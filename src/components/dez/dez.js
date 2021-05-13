import React from 'react';
import axios from 'axios';
import './dez.css'

export default class Dez extends React.Component {

  constructor(props) {
  super(props);
  this.state={
    name:"",
    start:"",
    
  }
  this.tethy=this.tethy.bind(this);

  this.go=this.go.bind(this);
}
  
go(e){
  e.preventDefault();
  console.log("tmyk")

   axios.post(`https://the-butterfly.dantraztrev.repl.co/api/game/`,{name:this.state.name,complexity:2})
      .then(res => {
               console.log(res);
              this.setState({start:<div class="start"><div class="start-con">{res.data.status} at alpha server</div></div>})
                     })
 

}

tethy(e){
this.setState({name: e.target.value});

}


  

  render() {
  
    
    return (
      <div class="Dez">
      <div class="butt">The Butterfly</div>
       {this.state.start}
     <p class="line-1 anim-typewriter">
    
        What should we call you?<form onSubmit={this.go}> <input type="text"  placeholder="Dantra" value={this.state.name}  onChange={(e)=>{this.props.pen(e);this.tethy(e)}}
/></form>
      </p>  
      
      </div>
    )
  }
}
