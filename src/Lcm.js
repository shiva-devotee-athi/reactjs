import React, { Component } from "react";
import Lcm1 from "./Lcm1";



class Lcm extends Component
{
    constructor(){
        console.log("constructor")
        super()
        this.state={name:"kumar"};
        
    }
    UNSAFE_componentWillMount()
    {
        console.log("component will mount")
    }

    componentDidMount()
    {
        console.log("component Did Mount")
    }
    componentDidUpdate()
    {
        console.log("component Did Update")
    }
    componentWillUpdate()
    {
        // setTimeout(()=>
        // {
        //     console.log("GMK")
        // },2000)
        console.log("Component Will Update")
    }
    
    shouldComponentUpdate()
    {
        console.log("Should Component Update")
        return true;
    }
    
    render(){
        console.log("render")
        return(
            <div>
               <h1>{this.state.name}</h1> 
                <button onClick={()=>this.setState({name:"muthukumar"})}>click</button>
                <Lcm1 value={this.state.name}></Lcm1>
            </div>
        )
    }
}
export default Lcm;