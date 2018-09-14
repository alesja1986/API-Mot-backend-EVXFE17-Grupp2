import React, { Fragment, Component } from "react";

import Transaction from "./Transaction/Transaction.js";
import Order from "./Order/Order.js";

class Tables extends Component {
	
	render() {
		return(
			<div class="row">
				<Transaction />
				<Order />
			</div>
		);
	}
}

export default Tables;