import React from "react";
import ReactDOM from "react-dom";

const App = () => {
	return (
		<div>
			<h1> Parts list</h1>

			<img style={{ width: "300px", height: "300px" }} src="parts.jpg" />
			<h2>Item List</h2>
			<ul>
				<li>First component</li>
				<li>Second component</li>
				<li>Third Component</li>
			</ul>
			<h2> Checkout Instructions </h2>
			<p> Add checkout instructions here </p>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector(".react-container"));
