import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Joi from "joi-browser";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import { faTrash} from '@fortawesome/free-solid-svg-icons'

function Person() {
	const [formData, setFormData] = useState(null);
	const [persons, setPersons] = useState([])
	const [errors, setErrors] = useState(null);
	const [selectedId,setselectedId ] = useState(null)
	const [mode, setmode] = useState('create');

	const handleFormChange = (e) => {
		let key = e.target.name;
		let value = e.target.value;
		setFormData({ ...formData, [key]: value });
	};
	console.log(formData);

	const formSchema = {
		name: Joi.string().min(5).max(30).required(),
		age: Joi.number().integer().min(10).max(100).required(),
		email: Joi.string().email().min(5).max(40).required(),
		location1: Joi.string(),
		location2: Joi.string(),
		location3: Joi.string(),
		gender:Joi.string(),
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
         setErrors(null)
		let validation = Joi.validate(formData, formSchema);
		if (validation.error) {
			setErrors(validation.error.details);
		}
		else if(mode ==='create'){

			formData && setPersons([...persons, formData])
			setFormData(null)
		}
		else if(mode ==='update'){
           let newItems =[...persons];
           newItems[selectedId]=formData;
		   setPersons(newItems);
		   setFormData(null);

		}
		console.log("formData",persons)
		setmode('create')

	};
 const	deleteCity = (id) => {
     

		console.log("delete ")
        const update=persons.filter((ele,index)=>{
             return index !== id;
            });
            setPersons(update);
		}
		const updateCity = (id) => {
			console.log('id', id)
	   
			setselectedId(id)
			setmode('update')
			// setState({mode:'update'})
			setFormData(persons[id])
			console.log("update",setFormData)
		}

	return (
		<div style={{ flexGrow: 1 }} className="col-md-6 shadow mx-auto mt-5 p-5">
		  <center><h2>Registration Form</h2></center>
			<form onChange={handleFormChange} onSubmit={handleFormSubmit}>
				<h6>Enter the Name</h6>
				<input
					type="text"
					name="name"
					className="form-control mb-3"
					id=""
					value={formData  ?  formData.name: ''}
					placeholder="Enter Name"
				/>
				{errors && errors.map(err=>err.context.key==='name'&& <p className="text-danger">{err.message}</p>)}
               <h6>Enter the Age</h6>
				<input
					type="text"
					name="age"
					className="form-control mb-3"
					id=""
					value={formData  ?  formData.age: ''}
					placeholder="Age"
				/>
				{errors && errors.map(err=>err.context.key==='age'&& <p className="text-danger">{err.message}</p>)}
                <h6>Enter the Email</h6>
				<input
					type="text"
					name="email"
					className="form-control mb-3"
					id=""
					value={formData  ?  formData.email: ''}
					placeholder="Enter email"
				/>
				 {errors && errors.map(err=>err.context.key==='email'&& <p className="text-danger">{err.message}</p>)}
				 <h6>Enter the Location</h6>
				 <input
					type="checkbox"
					name="location1"
					checked={formData && formData.location1 === 'Mohali'? true: false}
					value={formData && formData.location3 ? formData.location1 : 'Mohali'}
					id=""
			
				/>Mohali
				 <input
					type="checkbox"
					name="location2"

					checked={formData && formData.location2 === 'shimla'? true: false}
					value={formData && formData.location2 ? formData.location2 : 'shimla'}
				/>Shimla
				<input
					type="checkbox"
				
					name="location3"
					checked={formData && formData.location3 === 'chandigarh'? true: false}
					id=""
					value={formData && formData.location3 ? formData.location3 : 'chandigarh'}
				/>chandigarh
				<h6>Gender</h6>
				<input type="radio" 
				checked={formData && formData.gender === 'male'? true: false} 
				 name="gender"
				  value="male" />
				   Male
                <input type="radio" 
				 checked={formData && formData.gender === 'female'? true: false} 
				 name="gender" 
				 value="female" />
				  Female<br />
				
				

				<button className="btn btn-success">{mode ==='create'? 'ADD': 'Update'}</button>


			</form>
			<center><h3>Table Data</h3></center>
			<table class="table table-danger table-striped">
				<thead>
					<th>Name</th>
					<th>Age</th>
					<th>email</th>
					<th>Location</th>
					<th>Gender</th>
					<th>Delete</th>
					<th>Edit</th>
				</thead>
				<tbody>
					{
						persons && persons.map((person,id)=>(
							<tr class="table-danger">
								<td>{person.name}</td>
								<td>{person.age}</td>
								<td>{person.email}</td>
								<td>{`${person.location1 ? person.location1 : ''}
                             ${person.location2 ? person.location2: '' }
                             ${person.location3 ? person.location3: '' }
                            `
						}</td>
						<td>{person.gender}</td>
						<td><button  className="btn btn-danger" onClick={()=>deleteCity(id)}>Delete  </button> </td>
						<td><button  className="btn btn-success" onClick={()=>updateCity(id)}>Edit </button> </td>
							</tr>
						))
					}
				</tbody>

			</table>
		</div>
	);
}

export default Person;
