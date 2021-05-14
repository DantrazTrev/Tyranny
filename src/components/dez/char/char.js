import React from 'react';
import axios from 'axios';
import './char.css'

export default class Charchi extends React.Component {

  constructor(props) {
  super(props);
  this.state={
    char:[],
    choice:[],
    currchoice:"",
    currchar:"",
    
  }
 
}
  
go=(e)=>{
  e.preventDefault();
  console.log("tmyk")
  console.log(this.state.char,this.state.choice)  

   axios.post(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name,{charecters:this.state.char,choices:this.state.choice,levels:''})
      .then(res => {
               console.log(res);
                     })

}

chari=(item)=>{
  this.setState({currchar:item})
}
choic=(item)=>{
  this.setState({currchoice:item})
}
addchar=(e)=>{
  e.preventDefault();
  const list = [...this.state.char, this.state.currchar];
  this.setState({char:list,currchar:""})

}

addchoi=(e)=>{
  e.preventDefault();
  const list = [...this.state.choice, this.state.currchoice];
  this.setState({choice:list,currchoice:""})

}

  render() {
     
    
    return (<div class="cahr">
          <div class="charli"><p className="title">Charecters</p>
             <form onSubmit={this.addchar}>  <input
                  type="text"
                  value={this.state.currchar}
                  onChange={(event) => {this.chari(event.target.value)}}
              />
             </form>
               <ul>
                {this.state.char.map((char, index) => (
                    <Li
                        key={index}
                        id={index}
                        item={char}
                    />
                ))}
            </ul>
              
              </div>
              <div class="choli"><p className="title">Choices</p>
          
            <form onSubmit={this.addchoi}>  <input
                  type="text"
                  value={this.state.currchoice}
                  onChange={(event) => {this.choic(event.target.value)}}
              />
              </form>
              <ul>
                {this.state.choice.map((char, index) => (
                    <Li
                        key={index}
                        id={index}
                        item={char}
                    />
                ))}
            </ul></div>
          <button class="add" onClick={this.go}>Config</button>
    </div>
    )
  }
}


function Li({ id, item, onCheck }) {
    return (
        <>
        <li
            onClick={() => {onCheck(id)}}
        >
            {item}  
        </li>
        </>
    )
}
