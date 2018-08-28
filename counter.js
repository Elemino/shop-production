import React, { Component } from "react";

class Counter extends Component {
	state = {
		count: 1
	};

	render() {
		return (
			<div>
				<span> {this.state.count}</span>
				<button>Increment</button>
			</div>
		);
	}
	formatCount() {
		return this.state.count === 0 ? "Zero" : this.state.count;
	}
}

export default Counter;
