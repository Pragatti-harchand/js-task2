import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Swal from 'sweetalert';



function Apidata() {
	const [allUsers, setAllUsers] = useState(null);
	const [persons, setPersons] = useState(null);
	const [refresh, setRefresh] = useState(false)
	

	useEffect(() => {
		axios("https://61057f094b92a000171c5f3d.mockapi.io/data").then(
			(response) => {
				setPersons(response.data);
				},
			);
		}, [refresh]);
	  const handleRefreshTable = () => {
		setRefresh(!refresh)
	  }

	const handleDelete = (id)=>{
		Swal.fire({
			title: "Are you sure?",

			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Delete",
		}).then((result) => {
			if (result.isConfirmed) {
				axios
					.delete(`https://60efff36f587af00179d3c01.mockapi.io/persons/${id}`)
					.then((response) => {
						if (response.status === 200) {
							Swal.fire("Deleted!", "User deleted successfully", "success");
						}
					})
					.catch((err) => {
						console.log(err);
						Swal.fire("Deleted!", "Something went wrong", "error");
					});
			}
		});
	}

	

	return (
		<div>
			{/* <input type="text" onKeyUp={handleSearch} /> */}
			<table className="table table-striped">
				<thead>
					<th >Id</th>
					<th>Name</th>
					<th>Image</th>
					<th>Email</th>
					<th >Age</th>
					<th >Delete</th>
					<th >Edit</th>
				</thead>
				<tbody>
					{persons ? (
						persons.map((person) => (
							<tr key={person.id}>
								<td>{person.id}</td>
								<td>{person.name}</td>
								<td>
									<img
										className="rounded-circle"
										style={{ width: "50px" }}
										src={person.avatar}
										alt=""
									/>
								</td>
								<td>{person.email}</td>
								<td>{person.age}</td>
								<td> <DeleteIcon onClick={() => handleDelete(person.id)}></DeleteIcon></td>
								<td> <EditIcon></EditIcon></td>
							</tr>
						))
					) : (
						<h3>Loading...</h3>
					)}
				</tbody>
			</table>
			
			</div>
		
	);
}

export default Apidata;



