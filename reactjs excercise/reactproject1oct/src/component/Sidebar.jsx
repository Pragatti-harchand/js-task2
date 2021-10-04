import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
	sidebar: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		color: "#ffffff",
		
	},
	sidebarLink: {
		height: "80px",
		width: "90px",

		margin: "10px 0",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",

		"& h5": {
			margin: "5px 0",
			fontSize: "11px",
		},
		"&:hover": {
			background: "#EA5179",
			color: "#ffffff",
			borderRadius: "10px",
		},
	},
});

function Sidebar() {
	const classes = useStyles();
	const linksArray = [
		{
			id: 1,
			label: "Dashboard",
			classes: "sidebar-links",
			icon: <HomeIcon />,
			path: "/table",
		},
		{
			id: 2,
			label: "ADD Users",
			classes: "sidebar-links",
			icon: <PeopleAltIcon />,
			path: "/person",
		},
		{
			id: 3,
			label: "Category",
			classes: "sidebar-links",
			icon: <PeopleAltIcon />,
			path: "/categories",
		},
		{
			id: 4,
			label: "Log Out",
			classes: "sidebar-links",
			icon: <PeopleAltIcon />,
			path: "/products",
		},
		
		
	];
	return (
		<div className={classes.sidebar}>
			
			{linksArray.map((link) => (
					<Link to={`/dashboard${link.path}` }>
				    <div className={classes.sidebarLink} key={link.id}>
					{link.icon}
					<h5>{link.label}</h5>
				</div>
				</Link>
			))}
		</div>
	);
}

export default Sidebar;