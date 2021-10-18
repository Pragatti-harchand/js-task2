import React from "react";
// import Main from "../components/Main";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";

import  { Route } from "react-router-dom";

import "./dashboard.css";
import Person from "../component/Person";
import Category from "../component/Category";
import TableForm from "../component/TableForm";

import Logout from "../component/Logout";


export default function Dashboard() {
	return (
		<div className="m-dashboard">
			<div className="m-sidebar-wrapper">
				<Sidebar />
			</div>
			<div className="m-main-wrapper">
				  <Navbar /> 
                  
			
				  
				<Route path="/dashboard/person/:id?"  component={Person} />
				<Route path="/dashboard/categories" component={Category} />
				<Route path="/dashboard/table" component={TableForm} />
				<Route path="/dashboard/Logout" component={Logout} />
				
			</div> 
		</div>
	);
}