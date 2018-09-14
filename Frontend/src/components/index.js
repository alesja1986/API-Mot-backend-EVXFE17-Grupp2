import React, { Fragment } from "react";

import DashBoard from "./DashBoard/DashBoard.js";
import MonthlyEarnings from "./Graphs/MonthlyEarnings/MonthlyEarnings.js";
import EmailSent from "./Graphs/EmailSent/EmailSent.js";
import MonthlyEarningsLessIncome from "./Graphs/MonthlyEarningsLessIncome/MonthlyEarningsLessIncome.js";
import Info from "./Information/index.js";

export default render => {
	render (
		<Fragment>
			<DashBoard />
			<div class="wrapper">
				<div class="container-fluid">
					<div class="row">
						<Info />
						<MonthlyEarnings />
						<EmailSent />
						<MonthlyEarningsLessIncome />
					</div>
				</div>
			</div>
		</Fragment>
	);
};