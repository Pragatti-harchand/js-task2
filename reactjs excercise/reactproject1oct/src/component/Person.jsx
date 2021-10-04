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
    const [persons, setPersons] = useState([])
    const [formData, setFormData] = useState(null);
	
   
   
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
						   label="image"
						   variant="outlined"
						   name="image"
						   type="file"
						   value={formData  ?  formData.image: ''}
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

						


                        
                            <Button type="submit" variant="contained" color="success">
                                  Submit
                                  </Button>
							</Grid>
						
					
				</form>
			</Paper>
           
		<p></p>
	
		</div>
	);
}

export default Person;