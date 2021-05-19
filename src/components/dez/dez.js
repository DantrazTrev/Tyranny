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
              this.setState({start:<div className="start"><div className="start-con" onClick={this.props.chars}>{res.data.status} at the alpha server</div></div>})
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
      <div className="Dez">
      <div className="butt">The Butterfly</div>
       {this.state.start}
     
    
        <form onSubmit={this.go}><p className="line-1 anim-typewriter">What should we call you? <input type="text"  placeholder="Dantra" value={this.state.name}  onChange={(e)=>{this.props.pen(e);this.tethy(e)}}/></p>  
        {/*<span className="ter">Complexity <input className="typeinp"  type="range" 
      min="0" max="5" 
      value={this.state.comple} 
      onChange={this.covere}
      step="1"/></span>*/}
       
</form>
      
      
      </div>
    )
  }
}
