import React from 'react';
import axios from 'axios';
import './star.css'

export default class Star extends React.Component {

  constructor(props) {
  super(props);
  this.state = { version: "" ,
   };
   
}



  componentWillMount(){
    axios.get(`https://the-butterfly.dantraztrev.repl.co/api/game/`)
      .then(res => {
        this.setState(
    {version: res.data.Version}
 );
       console.log(res);
      })
  }
  

  render() {
    return (
      <div class="Star">
       <header>THE <br/> BUTTERFLY</header>
       v. {this.state.version}
       <button class="sr" onClick={this.props.sutrat} disabled={this.state.version===""}>Start</button>
      </div>
    )
  }
}
