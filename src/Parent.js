import React, { Component } from 'react'
import Child from './Child'


export default class Parent extends Component 
{

    constructor()
    {
        super()
        this.state={content:"welcome"}
    }
    
    
  render()
   {
    return ( 
      <div>
            Parent component <h1>{this.state.content}</h1>
            <Child data={this.state.content}></Child>
            <button onClick={this.update}>Parent</button>
      </div>
    )
  }
}
