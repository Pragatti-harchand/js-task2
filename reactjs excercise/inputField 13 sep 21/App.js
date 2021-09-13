import React, { Component } from 'react'
// import Input from './Component/Input'
import Form from './Component/Form'

export default class App extends Component {
  
  render() {
    return (
      <div className="App">
        
        <Form defaultText="Enter the city" cities={['Delhi', "Patiala"]}/>
      </div>
    )
  }
}
