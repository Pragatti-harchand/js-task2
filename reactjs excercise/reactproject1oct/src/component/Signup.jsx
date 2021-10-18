import React,{useState} from 'react'

export default function Signup(props) {
    const [formData, setFormData] = useState(null);
	const [persons, setPersons] = useState([])
    

    const handleFormChange = (e) => {
		let key = e.target.name;
		let value = e.target.value;
		setFormData({ ...formData, [key]: value });
	};
	console.log(formData);

    const handleFormSubmit = (e) => {
        
        e.preventDefault();
        formData && setPersons([...persons, formData])
			setFormData(null)
        if(formData.name === 'admin' && formData.password === 'admin'){
            props.history.push('/dashboard')
        }else{
            alert("please fill the correct name and password")
        }
    }
    
    

     

    return (
    
        <div className="mt-5 p-5 mx-auto shadow col-md-6">
              <h1>  <italic>Sign UP </italic></h1>
        <form   onChange={handleFormChange} onSubmit={handleFormSubmit}>
              <div class="mb-3">
                <label  class="form-label">UserName</label>
                <input type="name" class="form-control" name="name" value={formData?.name} />
                
            </div>
             <div class="mb-3">
              <label class="form-label">Password</label>
              <input type="password" class="form-control"name="password" value={formData?.password} />
             </div>
           <button type="submit" class="btn btn-dark">Submit</button>
       </form>  
  
        </div>
    )
}
