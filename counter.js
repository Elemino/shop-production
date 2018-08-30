import React, { Component } from "react";

class Counter extends Component {
	state = {
		count: 1
	};

	render() {
		return (
			<div>
				<span className="Badge badge-primary m-2">{this.format.Count()}</span>
				<button>Increment</button>
			</div>
		);
	}
	formatCount() {
		const { count } = this.state;
		return this.state.count === 0 ? "Zero" : count;
	}
}

export default Counter;
