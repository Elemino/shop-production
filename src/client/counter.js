import React, { Component } from "react";
import { store, view} from 'react-easy-state'


class Counter extends Component {
	state = {
		count: 0
	};

	handleIncrement() {
		console.log("Increment!", this)
	}

	render() {
		return (
			<div>
				<span className="Badge badge-primary m-2">{this.format.Count()}</span>
				<button
				onClick={this.handleIncrement}
				className="btn btn-secondary btn-sm">Increment</button>
			</div>
		);
	}
	formatCount() {
		const { count } = this.state;
		return this.state.count === 0 ? "Zero" : count;
	}
}

export default Counter;
