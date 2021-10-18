import {
	TextField,
	Grid,
	Paper,
	FormControl,
	RadioGroup,
	FormControlLabel,
	Radio,
    Checkbox ,
    Button,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/styles'

// import SendIcon from '@mui/icons-material/Send';
import React,{useState,useEffect} from "react";
// import Joi from "joi-browser";
const useStyles = makeStyles(theme=>({
    form:{
      width:"80%",
      margin:"23px",
      padding:"40px",
    //   border:"2px solid black",
	  background:"Wheat",
    },
    Container:{
        // borderRadius:15, 
        margin:'30px 10px',
        maxWidth:950
  
    },
  
    tableHeadcell:{
          fontWeight:'bold',
          backgroundColor:"black",
          color:"white",
          
    },
    h1:{
        color:"red",
        fontStyle:"italic"
        
    }
  }))

function Person(props) {
    const classes = useStyles();
    const [persons, setPersons] = useState(localStorage.getItem('form')? JSON.parse(localStorage.getItem('form')): [])
	const [mode, setMode] = useState('create')
    const [formData, setFormData] = useState(null);
	let localData = null;
	useEffect(() => {
		let id = props.match.params.id;

		localData = localStorage.getItem('form');
		localData = JSON.parse(localData)
		if(localData && localData[id]){
			setFormData(localData[id])
			setMode('update')
		} 
			

	}, [])
   
   
    const handleFormChange = (e) => {
		let key = e.target.name;
		let value = e.target.value;
		setFormData({ ...formData, [key]: value });
	};
	console.log(formData);


    const handleFormSubmit = (e) => {
		e.preventDefault();
        formData && setPersons([...persons, formData])
		// localStorage.setItem('form',JSON.stringify(	persons))
		
			setFormData(null)
    }
	
	const handleUpdate = () => {
		
		persons[props.match.params.id] = formData;
		localStorage.setItem('form', JSON.stringify(persons))
		props.history.push('/dashboard/table')
	}
	

	useEffect(() => {
		localStorage.setItem('form',JSON.stringify(	persons))
		
		
	}, [persons]);


	return (
		<div>
			<Paper>
				<form className={classes.form}  onChange={handleFormChange} onSubmit={handleFormSubmit}>
              <center>   <h1 className={classes.h1}> Registration Form</h1></center>
					<Grid>
						<Grid item xs={6} className={classes.Container}>
							<TextField
								fullWidth
								id="outlined-basic"
								label="Name"
								variant="outlined"
                                name="name"
                                value={formData  ?  formData.name: ''}
							/>
						</Grid>
                    
                        
						<Grid item xs={6} className={classes.Container}>
							<TextField
								fullWidth
								id="outlined-basic"
								label="Age"
								variant="outlined"
                                name="age"
                                value={formData  ?  formData.age: ''}
							/>

                           
						</Grid>
                        
						<Grid item xs={6} className={classes.Container}>
							<TextField
								fullWidth
								// id="outlined-basic"
								label="Email"
								variant="outlined"
                                name="email"
                                value={formData  ?  formData.email: ''}
							/>
						</Grid>

						

						<Grid item xs={6} className={classes.Container}>
						<TextField
                           fullWidth
						   // id="outlined-basic"
						   label="password"
						   variant="outlined"
						   name="password"
						   type="password"
						   value={formData  ?  formData.password: ''}
                         />
						</Grid>

						


                        {mode === 'create' ? 
                            <Button type="submit" variant="contained" color="success">
                                  Submit
                                  </Button> : <Button onClick={handleUpdate} variant="contained" color="secondary">Update</Button>
						}
						</Grid>
					
				</form>
			</Paper>
           
		<p></p>
	
		</div>
	);
}

export default Person;