import React from "react";
import Person from "./Person";

function Sign() {
	return (
		<div style={{ display: "flex", height: "100vh" }}>
			<img
				style={{ width: "70%", objectFit: "cover" }}
				src="https://picsum.photos/1000"
				alt=""
			/>
			<Person/>
		</div>
	);
}

export default Sign;


