import React, { Component } from 'react'
// import Input from './Component/Input'
import Form from './Component/Form'
import FormData from './Component/FormData'
import Lifecycle from './Component/Lifecycle'
import Mount from './Component/Mount'
import Person from './Component/Person'
import TempForm from './Component/TempForm'
import Counter from './Component/Counter'
import Todo from './Component/Todo'

export default class App extends Component {
  
  render() {
    return (
      <div className="App">
        {/* <Input/> */}
        {/* <Form defaultText="Enter the city"/> */}
        {/* <TempForm/> */}
        {/* <FormData/> */}
        {/* <Mount color="white"/> */}
        {/* <Counter></Counter> */}
        {/* <Lifecycle  color="white"></Lifecycle> */}
        {/* <Person/> */}
        <Todo/>
      </div>
    )
  }
}
