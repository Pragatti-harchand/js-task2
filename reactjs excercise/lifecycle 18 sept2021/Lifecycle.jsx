import React, { Component } from 'react'

export default class Lifecycle extends Component {
    
componentWillUnmount(){
    console.log("component will unmount");
}
    render() {
        
        return (
          <div>
            users
          </div>
        );
    }
}
