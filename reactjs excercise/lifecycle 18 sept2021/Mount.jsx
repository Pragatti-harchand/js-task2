import React, { Component } from 'react'
import Lifecycle from './Lifecycle';
export default class Mount extends Component {
    constructor() {
        super();
        this.state={color:'red',deleteUser:true}
        console.log('constructor');
      }

      static getDerivedStateFromProps(props,state){
        console.log('getDrivedStateFromProps');
          return{};
      }
    
      componentDidMount() {
          this.setState({color:'green'});
        console.log('componentDidMount');
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
      shouldComponentUpdate(){
          console.log("should component update")
          return true;
      }
    componentDidUpdate(){
        console.log("componentdidupdate");
    }
      
    
      render() {
        console.log('render',this.state.color);
        return (
          <div>
            <h1>Hello, world!</h1>
            <h6>{this.state.color}</h6>
            {this.state.deleteUser && <Lifecycle/>}
            <button  class="btn btn-info btn-lg"onClick={()=>{this.setState({deleteUser:false})}}>Delete</button>
          </div>
        );
      }
}
