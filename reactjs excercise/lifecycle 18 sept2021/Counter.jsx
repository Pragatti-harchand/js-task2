import React, { useState } from "react";

function Counter() {
	let [count, setCount] = useState(5);
	return (
        <div className="mb-4 p-5 mx-auto  col-md-4" >
            <h1> <center> functional component lifecycle</center></h1>
			<button
				style={{ backgroundColor: "pink" }}
				onClick={() => setCount(count - 1)}>
				Decrement
			</button>
            
			<p >
				{count}
			</p>
			<button
				style={{ backgroundColor: "green" }}
				onClick={() => setCount(count + 1)}>
				Increment
			</button>
		</div>
	);
}

export default Counter;
