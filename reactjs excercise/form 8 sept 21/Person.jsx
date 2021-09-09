import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Joi from "joi-browser";

function Person() {
	const [formData, setFormData] = useState({});
	const [persons, setPersons] = useState([])
	const [errors, setErrors] = useState(null);

	const handleFormChange = (e) => {
		let key = e.target.name;
		let value = e.target.value;
		setFormData({ ...formData, [key]: value });
	};
	console.log(errors);

	const formSchema = {
		name: Joi.string().min(5).max(30).required(),
		age: Joi.number().integer().min(10).max(100).required(),
		email: Joi.string().email().min(5).max(40).required(),
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
         setErrors(null)
		let validation = Joi.validate(formData, formSchema);
		if (validation.error) {
			setErrors(validation.error.details);
		}
		else{

			formData && setPersons([...persons, formData])
		}
	};

	return (
		<div style={{ flexGrow: 1 }} className="mb-3 p-5 shadow">
			{/* {errors &&
				errors.map((er) => (
					<div className="alert alert-danger">{er.message}</div>
				))} */}
			<form onChange={handleFormChange} onSubmit={handleFormSubmit}>
				<input
					type="text"
					name="name"
					className="form-control mb-3"
					id="exampleFormControlInput1"
					placeholder="Enter Name"
				/>
				{errors && errors.map(err=>err.context.key==='name'&& <p className="text-danger">{err.message}</p>)}

				<input
					type="text"
					name="age"
					className="form-control mb-3"
					id="exampleFormControlInput1"
					placeholder="Age"
				/>
				{errors && errors.map(err=>err.context.key==='age'&& <p className="text-danger">{err.message}</p>)}

				<input
					type="text"
					name="email"
					className="form-control mb-3"
					id="exampleFormControlInput1"
					placeholder="Enter email"
				/>
				
				{errors && errors.map(err=>err.context.key==='email'&& <p className="text-danger">{err.message}</p>)}
				<button className="btn btn-dark mt-5">Submit</button>


			</form>
			<table className="table">
				<thead>
					<th>Name</th>
					<th>Age</th>
					<th>email</th>
				</thead>
				<tbody>
					{
						persons && persons.map(person=>(
							<tr>
								<td>{person.name}</td>
								<td>{person.age}</td>
								<td>{person.email}</td>
							</tr>
						))
					}
				</tbody>

			</table>
		</div>
	);
}

export default Person;
