import React, { Fragment } from "react";

import DashBoard from "./DashBoard/DashBoard.js";
import Transaction from "./Tables/Transaction";
import Order from "./Tables/Order";
import {Row} from "./Tables/Wrapper";

export default render => {
	render (
		<Fragment>
			<DashBoard />
			<Row>
				<Transaction />
				<Order />
			</Row>
		</Fragment>
	);
};