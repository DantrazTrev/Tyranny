import React from 'react';
import axios from 'axios';
import './game.css'
export default class Game extends React.Component {

  constructor(props) {
  super(props);
  this.state={
    status:null,
    me:null,
    day:0,
    kar:"amrii",
    dst:{0:[]},//For Day state
  }

}

 


upday=(e)=>{
  e.preventDefault();
  console.log("tmyk")

   axios.get(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/upday')
      .then(res => {
               console.log(res);
                 this.diary();
                const day=res.data.day
                 this.setState({dst:this.state.dst.push({day:[]})})
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
  console.log("tmyk")

   axios.get(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/day')
      .then(res => {
               console.log(res);
               this.setState({day:res.data})
                
                     })
 

}
diary=()=>{
  this.me();
  this.day();
}
me=(e)=>{
  axios.get(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/me')
      .then(res => {
        console.log(res.data.Playerop)
     
            const statli=Object.keys(res.data.Playerop).map((ker,i)=>
            {return( <div class="expenses__box"><span class="expenses__title">{ker}</span><span class="expenses__amount">{ parseFloat(res.data.Playerop[ker]*100).toFixed(2)+"%"}</span></div>)})
        this.setState({me:statli})  
          
})
 

}
kar=(e)=>{
  
  console.log("tmyk")

   axios.get(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/kar/'+e.target.id)
      .then(res => {
         console.log(res.data)
           
                
                     })
 

}
undi=(e)=>{
  e.preventDefault();
  console.log("tmyk")
   axios.get(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/undi/'+e.target.id)
      .then(res => {
               console.log(res);
                
                     })
 

}
di=(e)=>{
  e.preventDefault();
  console.log("tmyk")

   axios.get(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/di/'+e.target.id)
      .then(res => {
               console.log(res);
                
                     })
 

}
die=(e)=>{
  e.preventDefault();
  console.log("tmyk")

   axios.get(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/di/'+e.target.id)
      .then(res => {
               console.log(res);
                
                     })
 

}
trusty=(e)=>{
  e.preventDefault();
  console.log("tmyk")

   axios.post(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/trusty/'+e.target.value,{trust:1})
      .then(res => {
               console.log(res);
                
                     })
 

}
rewind=(e)=>{
  e.preventDefault();
  console.log("tmyk")

   axios.post(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/rewind',{day:e.target.value})
      .then(res => {
               console.log(res);
                
                     })
 

}
disc=(e)=>{
  e.preventDefault();
  console.log("tmyk")
  const cahr=e.target.id
   axios.post(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/disc',{Name:e.target.id})
      .then(res => {
               const day=String(this.state.day.day)
               const choices= this.props.choi
               var  dast=this.state.dst
             
               var topix = choices[Math.floor(Math.random() * choices.length)];
               const stat="Discussed with "+cahr+" about "+topix
               dast[day].push(stat)
             this.setState({dst:dast})
            
                     })
 

}
inf=(e)=>{
  e.preventDefault();
  console.log("tmyk")
  console.log(e.target.value)
  const cahr=e.target.id
  axios.post(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/inf',{Name:e.target.id})
      .then(res => {
               console.log(res);
               const day=this.state.day.day
               var  dast=this.state.dst
               const choices= this.props.choi
               var topix = choices[Math.floor(Math.random() * choices.length)];
               const stat=" Talked with "+cahr+" about "+topix
               dast[day].push(stat)
               this.setState({dst:dast})
                
                
                     })
 

}
 componentWillMount(){
 axios.get(`https://the-butterfly.dantraztrev.repl.co/api/game/`+this.props.name+'/me')
      .then(res => {
        console.log(res.data.Playerop)
     
            const statli=Object.keys(res.data.Playerop).map((ker,i)=>
            {return( <div class="expenses__box"><span class="expenses__title">{ker}</span><span class="expenses__amount">{ parseFloat(res.data.Playerop[ker]*100).toFixed(2)+"%"}</span></div>)})
        this.setState({me:statli})  

        
      })
      const karli=this.props.chars.map((ker,i)=>
        {return(  
        <div class="celf">
          <div class="cellimg"><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-contact-512.png" /></div>
          <div class="cellid" onClick={this.inter} id={ker}>{ker}<div><a href="#"><i id={ker} class="fas fa-phone" onClick={this.disc}></i>  
        <i id={ker} class="fas fa-comment-dots" onClick={this.inf}></i></a></div>
        
  
          </div>
        

        
        
  
      </div>)})

        this.setState({kar:karli})
        this.day()                 
    

  }

  render() {
    const buttonli={}
      if(this.state.name !=="")
      {
        
      }
      var day=this.state.day.day
      const crimes=this.state.dst[0]
     var actions= crimes.map(ker=>{return(<li>{ker}</li>)})
      console.log(actions)
    return (
      <div className="Game"> 


 
<div class="main-content">
  <div class="notebook">
    <div class="notebook__inner">
      <div class="title"> 
        <h1>Day {this.state.day.day}</h1>
        <h4>Energy {this.state.day.energy}/10</h4>
      </div><div class="irr">
      <ul>
        <li>Day Started </li>
      {actions}
      </ul></div>
      <div class="notes"><span>notes</span>
        <div class="notes__list">
           - Follow-up customer meet email<br/>- Flight BOS-JFK: 2pm on 29 Apr</div>
      </div>
      <div class="expenses">
        <h4>Current Choices</h4>
          {this.state.me}
        </div>
      <div class="picture">
        <div class="picture__border"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/TSNY.jpg"/>
          <figcaption>
             Times Square,<br/>NYC &hearts; </figcaption>
        </div>
      </div>
      <div class="goals"><span>daily</span><span>goals</span>
        <div class="goals__inner">
          <div class="goals__list"> 
            <div class="goals__item">
              <div class="goals__item__checkbox"> <span>&#10004;</span></div>
              <div class="goals__item__desc">One Codepen	</div>
            </div>
            <div class="goals__item">
              <div class="goals__item__checkbox"></div>
              <div class="goals__item__desc">One Blog Post</div>
            </div>
            <div class="goals__item">
              <div class="goals__item__checkbox"></div>
              <div class="goals__item__desc">One Illustration</div>
            </div>
          </div>
        </div>
      </div>
      <div class="music">
        <div class="music__title">Artist of the Day</div>
        <div class="music__artist">Iva Bonza</div>
        <svg viewBox="0 0 444.18 444.18">
          <path d="M400.348,294.485c-8.014-20.093-24.798-33.091-46.049-35.662c-34.474-4.172-72.55,19.051-104.452,63.713   C178.301,422.701,110.164,429.493,90.976,429.168c-16.64-0.268-27.452-5.433-30.785-10.433   c-8.769-13.154,9.513-36.94,20.978-48.972c8.255,6.058,18.181,9.334,28.613,9.334c12.955,0,25.134-5.045,34.294-14.206   l106.461-106.46c2.786,0.3,5.602,0.467,8.444,0.467c20.7,0,40.162-8.062,54.801-22.7c14.638-14.638,22.699-34.1,22.699-54.801   c0-20.701-8.062-40.163-22.699-54.801c-30.219-30.217-79.385-30.215-109.602,0c-14.638,14.638-22.699,34.1-22.699,54.801   c0,2.842,0.167,5.658,0.467,8.444L75.488,296.304c-9.161,9.16-14.206,21.339-14.206,34.294c0,10.412,3.265,20.319,9.3,28.564   c-4.132,4.317-10.097,11.035-15.416,18.867c-16.741,24.653-13.295,40.269-7.456,49.027c6.927,10.392,23.011,16.788,43.023,17.11   c0.541,0.009,1.089,0.013,1.651,0.013c17.095,0,43.821-4.224,76.704-23.5c33.207-19.465,64.485-49.552,92.964-89.424   c28.193-39.471,62.012-60.985,90.444-57.541c15.637,1.891,27.999,11.487,33.918,26.327c10.44,26.179-0.117,62.094-28.242,96.072   c-8.815,10.649-16.981,21.185-24.273,31.314c-2.42,3.362-1.656,8.049,1.705,10.469s8.049,1.657,10.469-1.705   c7.096-9.856,15.054-20.123,23.654-30.513C401.406,367.408,412.853,325.841,400.348,294.485z M86.095,354.286   c-6.327-6.327-9.812-14.74-9.812-23.688c0-6.392,1.787-12.505,5.108-17.785l46.177,46.177c-5.28,3.322-11.394,5.108-17.785,5.108   C100.835,364.098,92.422,360.613,86.095,354.286z M214.788,225.593c-11.805-11.805-18.306-27.5-18.306-44.194   c0-3.396,0.283-6.747,0.811-10.036l71.725,71.725c-3.289,0.528-6.64,0.811-10.036,0.811   C242.288,243.899,226.593,237.397,214.788,225.593z M214.788,137.204c12.185-12.184,28.189-18.276,44.194-18.276   s32.01,6.092,44.193,18.276c11.806,11.805,18.307,27.5,18.307,44.194s-6.501,32.39-18.307,44.194   c-5.276,5.276-11.333,9.484-17.905,12.534l-83.017-83.017C205.304,148.537,209.512,142.48,214.788,137.204z M204.182,236.199   c8.337,8.337,18.243,14.533,29.047,18.329l-94.455,94.455l-47.376-47.376l94.455-94.456   C189.649,217.956,195.844,227.862,204.182,236.199z"></path>
          <path d="M71.404,156.771c3.832,0,7.727-0.683,11.515-2.124c8.114-3.085,14.542-9.146,18.097-17.065s3.815-16.75,0.729-24.864   L74.201,40.279l60.756-23.103l17.82,46.862c-5.879-1.236-12.163-0.87-18.183,1.419c-16.75,6.37-25.195,25.179-18.826,41.93   c4.929,12.961,17.306,20.95,30.414,20.95c3.832,0,7.727-0.683,11.515-2.124c8.114-3.085,14.542-9.146,18.097-17.065   s3.815-16.75,0.729-24.864l-30.211-79.45c-0.707-1.859-2.124-3.362-3.938-4.176s-3.879-0.875-5.738-0.168L61.859,28.924   c-3.872,1.472-5.817,5.804-4.345,9.676L78,92.472c-5.879-1.236-12.163-0.869-18.183,1.419c-16.75,6.37-25.195,25.179-18.826,41.93   C45.919,148.782,58.296,156.771,71.404,156.771z M162.109,103.004c-1.915,4.264-5.375,7.528-9.745,9.189   c-9.021,3.428-19.147-1.118-22.578-10.137c-3.429-9.02,1.118-19.148,10.137-22.578c2.041-0.776,4.137-1.144,6.201-1.144   c7.058,0,13.723,4.302,16.377,11.281C164.163,93.985,164.024,98.739,162.109,103.004z M65.148,107.912   c2.041-0.776,4.137-1.144,6.201-1.144c7.058,0,13.723,4.302,16.377,11.281c1.661,4.37,1.522,9.124-0.393,13.389   c-1.915,4.264-5.375,7.528-9.745,9.189c-9.021,3.429-19.147-1.118-22.578-10.137C51.582,121.47,56.129,111.342,65.148,107.912z"></path>
        </svg>
      </div>
     
   
      <div class="next" onClick={this.upday}> Next Day</div>
    </div>
  </div>
</div>

 

{/*Phone Starts here*/}

<div class="lgcell">
  <div class="cellbg">
    <div class="celltop">
        <div style={{float:"left"}}><i class="fas fa-circle"></i><i class="fas fa-circle"></i><i class="fas fa-circle"></i><i class="fas fa-circle"></i><i class="fas fa-circle"></i><i class="fas fa-wifi"></i></div>17:09<div style={{float:"right"}}><i class="fas fa-battery-three-quarters"></i></div>
    </div>
    <div class="cellheader">
      <div style={{float:"left"}}> Edit</div>Contacts <div style={{float:"right"}}><i class="fas fa-plus"></i></div>
    </div>
    <div class="cellcont">
      <div class="celf">
        <div class="cellimg"><img src="https://www.zupimages.net/up/19/09/bv2e.jpg" /></div>
        <div class="cellid" onClick={this.inter} id="Preno">Prénom Nom<div></div>
      

        </div>
      
      </div>
      
      {this.state.kar}

    </div>
    
    <div class="cellback">
      <div class="cellhead"><i class="fas fa-signal"></i><i class="fas fa-wifi"></i>
        <div style={{float:"right"}}>86%<i class="fas fa-battery-three-quarters"></i></div>
      </div>
      <div class="cellhour">16:20<span>21 May 2021</span></div>
    </div>
  </div>
</div>







      

        <div className="Buttonclass">
         
           <button onClick={this.rewind}>Rewind</button>
    </div>
      </div>
    )
  }
}
