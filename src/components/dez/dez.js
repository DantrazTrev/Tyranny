import React from 'react';
import axios from 'axios';
import './dez.css'

export default class Dez extends React.Component {

  constructor(props) {
  super(props);
  this.state={
    name:""
  }
  this.props={
    veb:"",
  }
  this.tethy=this.tethy.bind(this);
}
go = (e)=>{
  e.preventDefault();
  console.log("tmyk")

   axios.post(`https://the-butterfly.dantraztrev.repl.co/api/game/`,{name:this.state.name,complexity:2})
      .then(res => {
               console.log(res);
      })
}

tethy(e){
this.setState({name: e.target.value});
 


}


componentWillMount(props){
   this.props={
    veb:""      ,
  }
}
  

  render() {
    return (
      <div class="Dez">
     <p class="line-1 anim-typewriter">
        What should we call you?<form onSubmit={this.go}> <input type="text"  placeholder="Dantra" value={this.state.name}  onChange={this.tethy}
/></form>
      </p>  
      </div>
    )
  }
}
