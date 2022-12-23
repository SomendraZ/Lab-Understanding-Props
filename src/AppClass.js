import { Component } from "react";
import "./App.css" 

export default class AppClass extends Component{

  // code here
  render(){
    return(
      <div className='app'>
        <h1>Kalvim Gallery</h1>
        <div className='img'>
        {this.props.data.map((image)=>{
          return <img src={image.img} alt="" />
        })}
        </div>
      </div>
    )
  }
}
