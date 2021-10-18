import React,{useState,useEffect} from 'react'

import Joi from "joi-browser";

export default function Login() {
    const [email, setEmail] = useState("");
	const [password, setpassword] = useState("");
  const [errors, setErrors] = useState(null);

    
   
    const formSchema = {
      email: Joi.string().email().min(5).max(40).required(),
      password: Joi.string().min(5).max(40).required(),
    };

 async function login(e){
        
    
    e.preventDefault();
    setErrors(null)
    let item={email,password}
		let validation = Joi.validate(item, formSchema);
		if (validation.error) {
			setErrors(validation.error.details);
		}
		else{

			
		
	
    console.warn("data",email,password)
     await fetch('https://reqres.in/api/login',{
      method:'POST',
      headers:{
           "Content-Type":"application/json",
           "Accept":"application/json"
      },
      body:JSON.stringify(item)
    })
    .then((response) => response.json())
    .then((res)=>{
     alert(res.token)
    
    })
    .catch((error) => {
      
      alert(error)
    });
    
  }    
    }

    return (
        <div className="login">
       <h1>    <center>Login Page</center></h1>
     
     <input type="text" class="form-control" placeholder="enter the email"  onChange={(e)=>setEmail(e.target.value)} /><br></br>
     {errors && errors.map(err=>err.context.key==='email'&& <p className="text-danger">{err.message}</p>)}
     <input type="password" class="form-control"  placeholder="enter the password"  onChange={(e)=>setpassword(e.target.value) }/><br></br>
     {errors && errors.map(err=>err.context.key==='password'&& <p className="text-danger">{err.message}</p>)}
     <button onClick={login} className="btn btn-dark">Login</button>
     <p></p>
        </div>
    )
}
