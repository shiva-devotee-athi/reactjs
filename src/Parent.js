import React, { Component } from 'react'
import Child from './Child'


export default class Parent extends Component 
{

    constructor()
    {
        super()
        this.state={content:"welcome"}
    }
     update =()=>
    {
        this.setState({content:"Gud Morning"});
    }
      
    updatefromchild = ()=>
    {
        this.setState({content:"Gud morning All"})
    }
    
  render()
   {
    return ( 
      <div>
            Parent component <h1>{this.state.content}</h1>
            <Child data={this.state.content} updatechild={this.updatefromchild}></Child>
            <button onClick={this.update}>Parent</button>
      </div>
    )
  }
}
