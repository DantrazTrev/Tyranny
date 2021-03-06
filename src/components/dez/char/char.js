import React from 'react';
import axios from 'axios';
import './char.css';

export default class Charchi extends React.Component {

  constructor(props) {
  super(props);
  this.state={
    char:[],
    choice:[],
    currchoice:"",
    currchar:"",
    start:"",
    preferences:[]
  }
  this.por=this.por.bind(this)
 
}
  
go=(e)=>{
  e.preventDefault();
  console.log("tmyk")
  console.log(this.state.prefrences)  

    axios.post(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name,{charecters:this.state.char,choices:this.state.choice,levels:''})
      .then(res => {
               console.log(res);
                this.setState({start:<div className="start"><div className="start-con" onClick={this.props.game} >{res.data.status} at the alpha server</div></div>})

  const pref=this.state.preferences.map(p=>{return p})
  console.log(pref)
axios.post(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/playconfig',{choices:this.state.preferences,confidence:0.8})
      .then(resi => {
               console.log(resi);
                this.setState({start:<div className="start"><div className="start-con" onClick={this.props.game} >{resi.data.status} at the alpha server</div></div>})
                     })

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
  const pref=[...this.state.preferences,[0]]
  this.setState({choice:list,currchoice:"",preferences:pref})

}

por(e){
  let pref=[...this.state.preferences]
  pref[parseInt(e.target.id)][0]=parseFloat(e.target.value);
  this.setState({preferences:pref});
}

  render() {
     
    let pref=[...this.state.preferences]
    return (<div className="cahr">
            {this.state.start}
          <div className="charli"><p className="title">Charecters</p>
             <form onSubmit={this.addchar}>  <input
                  type="text"
                  value={this.state.currchar}
                  placeholder="+" 
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
              <div className="choli"><p className="title">Choices</p>
          
            <form onSubmit={this.addchoi}>  <input
                  type="text"
                  value={this.state.currchoice}
                  placeholder="+" 
                  onChange={(event) => {this.choic(event.target.value)}}
              />
              </form>
              <ul>
                {this.state.choice.map((char, index) => (
                  <div className="hoice">  <Ctoth
                        key={index}
                        
                        item={char}
                    /><input type="range" className="pref" id={index}  min="0" max="1" step="0.1" value={pref[index][0]}className="slider" onChange={this.por}/></div>
                ))}
            </ul></div>
          <button className="add" onClick={(e)=>{this.go(e);this.props.config(this.state.char,this.state.choice)}}>Config</button>
    </div>
    )
  }
}


function Li({ id, item, onCheck }) {
    return (
        <>
        <li
            // onClick={() => {onCheck(id)}}
        >
            {item}  
        </li>
        </>
    )
}

function Ctoth({ id, item, onCheck }) {
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

