import React,{useState} from 'react'


export default function TableForm(props) {
	const [mode, setmode] = useState('create');
    const [selectedId,setselectedId ] = useState(null)
	const getDatafromLS=()=>{
		const data =localStorage.getItem('form');
		if(data){
			return JSON.parse(data);
		}
		else{
			return []
		}
	}
	const [persons, setPersons] = useState(getDatafromLS())
	const updateCity = (id) => {
        console.log('id', id)
   
        setselectedId(id)
        setmode('update')
        // setState({mode:'update'})
        // (Items[id])
        // console.log("update",setInputList)
    }
    const deleteCity =(id) => {
        console.log("delete ")
        const update=persons.filter((ele,index)=>{
             return index !== id;
            });
            setPersons(update);
    }

    return (
        <div>
            <table class="table">
				<thead>
					<tr>
					<th>Name</th>
					<th>Age</th>
					<th>email</th>
			
					<th>Password</th>
					<th>Delete</th> 
					<th>Edit</th>
					</tr>
				</thead>
				<tbody>
                    
					{
						persons && persons.map((person,id)=>(
							<tr>
								<td>{person.name}</td>
								<td>{person.age}</td>
								<td>{person.email}</td>
								<td>{person.password}</td>
							    
							
					    
                            
					
						<td><button  className="btn btn-danger" onClick={()=>deleteCity(id)}>Delete  </button> </td>
						<td><button  className="btn btn-success" onClick={()=>updateCity(id)}>Edit </button> </td>
							</tr>
						))
					}
				</tbody>

			</table>
        </div>
    )
}
