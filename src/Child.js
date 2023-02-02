import React, {Component} from 'react'

class Child extends Component{
 
    constructor(){
        super()
        this.state={value:"kumar"}
        
    }
    static getDerivedStateFromProps(props,state)
    {
        console.log(props,state)
    }
    render(){
        return<div>
            Child Component  <h1>{this.props.data}</h1>
            <button onClick={this.updateData}>child</button>

        </div>
    }
}
export default Child
