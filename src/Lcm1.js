import React, { Component } from 'react'

export default class Lcm1 extends Component {
  constructor(){
    super()
    }
    UNSAFE_componentWillReceiveProps()
    {
      console.log("component will receive props")
    }
  render() {
      
      return (
      <div> {this.props.value} </div>
    )
  }
}
