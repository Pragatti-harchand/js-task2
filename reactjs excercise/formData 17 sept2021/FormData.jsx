import React, { Component } from 'react'


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons'
import { faPen} from '@fortawesome/free-solid-svg-icons'


export default class Form extends Component {
    state={

        formData: null,
        items:[],
        selectedId: null,
        mode: 'create'
		
     }




handlesubmit=(e)=>{
    // console.log(e.target)
    e.preventDefault();
    if(this.state.mode === 'create'){
        let allData = {}
        let formData  = new FormData(e.target)
        for(let [key, value] of formData) {
            allData[key] = value
            // console.log(key, value)
        
        }
        this.setState({formData: allData})
        this.setState({items: [...this.state.items, allData]})
        this.setState({value:''})
        this.setState({formData: null})
    }
    // console.log(this.state.selectedId)
    // console.log(this.state.value, 'value')
  
    
   
    else if(this.state.mode === 'update'){
        let newItems = [...this.state.items];
        let allData = {}
        let formData  = new FormData(e.target)
        for(let [key, value] of formData) {
            allData[key] = value
            // console.log(key, value)
        
        }
        newItems[this.state.selectedId] = allData;
        console.log('new items', newItems)
        this.setState({items: newItems})
        this.setState({formData: null})
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
    //  console.log('id', id)
   
     this.setState({selectedId: id})
    //  console.log( "sid",this .state.selectedId)
     this.setState({mode:'update'})
     this.setState({formData: this.state.items[id]})
     console.log("update",this.state.formData)
  
 }
 handleChange = (e) => {
     this.setState({formData: {...this.state.formData, [e.target.name]: e.target.value}})
    console.log(this.state.formData)
    }
 
 


render(){
    console.log(this.state.selectedOption)
    return(
       <div className="mt-5 p-5 mx-auto shadow col-md-6"  >
           <center><h2>Registration Form </h2></center>
           <form onSubmit={this.handlesubmit} onChange={this.handleChange}> 
                     <h5>Enter the name: </h5>
                    <input type="text" name="name"  placeholder="Name" value={this.state.formData  ?  this.state.formData.name: ''} />
                    <input type="text" name="lname"  placeholder="last name" value={this.state.formData  ?  this.state.formData.lname: ''}  /> <br />
                    <h5>Enter the Gender:</h5>
                    <input type="radio" checked={this.state.formData && this.state.formData.gender === 'male'? true: false}  name="gender" value="male" /> Male
                    <input type="radio"  checked={this.state.formData && this.state.formData.gender === 'female'? true: false} name="gender" value="female" /> Female<br />
                    <h5>Enter the location :</h5>
                    <input type="checkbox" checked={this.state.formData && this.state.formData.location1 === 'Mohali'? true: false} name="location1" id=""  value="Mohali" /> Mohali
                    <input type="checkbox" checked={this.state.formData && this.state.formData.location2 === 'Chandigarh'? true: false}  name="location2" id="" value="Chandigarh" /> Chandigarh
                    <input type="checkbox" checked={this.state.formData && this.state.formData.location3 === 'Ambala'? true: false}  name="location3" id="" value="Ambala" /> Ambala
                    <input type="checkbox" name="location4" id="" checked={this.state.formData && this.state.formData.location4 === 'Patiala'? true: false} value="Patiala" /> Patiala <br/>
                    <h5> Enter the age group:</h5>
                    <select name="ageGroup" id="">
                        <option value="teenager" selected={this.state.formData && this.state.formData.ageGroup === 'Teenager' ? true: false}>Teenager</option>
                        <option value="adult" selected={this.state.formData && this.state.formData.ageGroup === 'Adult' ? true: false}>Adult</option>
                        <option value="senior" selected={this.state.formData && this.state.formData.ageGroup === 'senior' ? true: false}>Senior</option>
                    </select><br/>
                    <br/>
                    <button type="submit" class="btn btn-info btn-lg">{this.state.mode ==='create'? 'ADD': 'Update'} </button>
                    </form>
         <h6>multiple items</h6>
         <table class="table table-danger table-striped" >

                <thead>
                    <tr class="table-dark">
                    <th>Name</th>
                    <th>last name</th>
                    <th>Gender</th>
                    <th>Location</th>
                    <th>Age</th>
                    <th>Delete</th>
                    <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.items.map((el,id)=>(
                        <tr >
                            <td>{el.name}</td>
                            <td>{el.lname}</td>
                            <td>{el.gender}</td>
                            <td>{`${el.location1 ? el.location1 : ''}
                             ${el.location2 ? el.location2: '' }
                             ${el.location3 ? el.location3: '' }
                             ${el.location4 ? el.location4: '' }
                            
                            `}</td>
                            <td>{el.ageGroup}</td>
                          <td>   <button  className="btn btn-danger" onClick={()=> { if (window.confirm('Are you sure you wish to delete this item?')) this.deleteCity(id)} }>Delete <FontAwesomeIcon icon={faTrash} /></button> </td>
                        <td>    <button className="btn btn-success" onClick={()=> this.updateCity(id)} >Edit<FontAwesomeIcon icon={faPen}  onClick={()=> this.updateCity(id)}/></button> </td>
                        </tr>
                    ))}
                </tbody>
            </table>
         
       </div>
       )
   }
}
