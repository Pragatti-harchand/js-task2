import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
export default class Form extends Component {
    state={
        value:'',
        show:'',
        items:this.props.cities
     }

handleChange=(e)=>{
    
 this.setState({value:e.target.value})
}

submit=()=>{
    
    this.setState({items: [...this.state.items, this.state.value]})
    this.setState({value: ''})
}

render(){
    console.log(this.state.items)
    return(
       <div className="mb-4 p-5 mx-auto shadow col-md-4">
           {/* {this.props.defaultText} */}
           <h1>Input Field</h1>
         <form >
            <input type="text"  placeholder="enter the item" value={this.state.value} onChange={this.handleChange} />
            <button type="button" class="btn btn-primary"onClick={this.submit}>Add</button>
         </form>
         <h6>todo item</h6>
         <ul>
        {
            this.state.items.map(item=>(<li>{item}</li>))
        }
             </ul>
       </div>
       )
   }
}
