import React, {Component} from 'react'

class Child extends Component{
 
    constructor(){
        super()
        this.state={value:"kumar"}
        
    }
    updateData=()=>
        {
         this.props.updatechild();
         this.setState({value:"Muthukumar"})
        }
    render(){
        return<div>
            Child Component  <h1>{this.props.data}</h1>
            <button onClick={this.updateData}>child</button>

        </div>
    }
}
export default Child
