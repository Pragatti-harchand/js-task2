import logo from './logo.svg';
import './App.css';
// import Array from './component/array';
import Signup from './component/Signup';

import Dashboard from './screen/Dashboard';
import PersonForm from './component/Person';
import Person from './component/Person';
import { Route } from 'react-router';
import TableForm from './component/TableForm';



function App() {
  return (
    <div className="App">
      {/* <Dashboard/> */}
      
         
     
			<Route path="/dashboard" component={Dashboard} /> 
			<Route path="/signup" component={Signup} /> 
      {/* <Signup/> */}
      {/* <Person></Person> */}
      {/* <TableForm></TableForm> */}
    </div>
    
    
     );
}

export default App;
