import React, { Fragment, Component } from "react";

import MonthlyEarnings from "./MonthlyEarnings/MonthlyEarnings.js";
import EmailSent from "./EmailSent/EmailSent.js";
import MonthlyEarningsLessIncome from "./MonthlyEarningsLessIncome/MonthlyEarningsLessIncome.js";

class Graphs extends Component {
	
	render() {
		return(
			<div className="row">
				<MonthlyEarnings />
				<EmailSent />
				<MonthlyEarningsLessIncome />
			</div>
		);
	}
}

export default Graphs;