import React, { Component } from 'react'


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons'
import { faPen} from '@fortawesome/free-solid-svg-icons'


export default class Form extends Component {
    state={
        value:'',
        show:'',
        items:[],
        selectedId: null,
        mode: 'create'
     }

handleChange=(e)=>{
    
 this.setState({value:e.target.value})
}

submit=()=>{
    console.log(this.state.selectedId)
    console.log(this.state.value, 'value')
  
    
    if(this.state.mode === 'create'){
        this.setState({items: [...this.state.items, this.state.value]})
    this.setState({value: ''})
    }
    else if(this.state.mode === 'update'){
        let newItems = [...this.state.items];
        newItems[this.state.selectedId] = this.state.value;
        console.log('new items', newItems)
        this.setState({items: newItems})
        this.setState({value:''})
    }
    this.setState({mode: 'create'})

}

 deleteCity = (id) => {
     

    console.log("deleted",id);
    const Olditems =[...this.state.items]
    // console.log("Olditems",Olditems);
    const items =Olditems.filter((element,i) => {
        return id!==i
    }

    )
    console.log(items)
    this.setState({items:items});
};
 updateCity = (id) => {
     console.log('id', id)
   
     this.setState({selectedId: id})
     this.setState({mode:'update'})
     this.setState({value: this.state.items[id]})
  
 }


render(){
    console.log(this.state.items)
    return(
       <div className="mb-4 p-5 mx-auto shadow col-md-4" key="items.key" >
           {/* {this.props.defaultText} */}
           <h1>Input Field</h1>
         <form >
            <input type="text"  placeholder="enter the item" id={this.i} value={this.state.value}  onChange={this.handleChange} />
            <button type="button" className="btn btn-primary"onClick={this.submit}>{this.state.mode ==='create'? 'ADD': 'Update'}</button>
         </form>
         <h6>todo item</h6>
         <ul className="list-group">
        {
            
            this.state.items.map((item,id) => (<li class="list-group-item"> 
                {item}
                <button className="btn btn-success" onClick={()=> this.updateCity(id)} >Edit<FontAwesomeIcon icon={faPen}  onClick={()=> this.updateCity(id)}/></button>
                <button  className="btn btn-danger" onClick={()=> { if (window.confirm('Are you sure you wish to delete this item?')) this.deleteCity(id)} }>Delete <FontAwesomeIcon icon={faTrash} /></button>
                </li>))
            
        
        }
             </ul>
       </div>
       )
   }
}
