import React, { Fragment } from "react";

import DashBoard from "./DashBoard/DashBoard.js";
import MonthlyEarnings from "./Graphs/MonthlyEarnings/MonthlyEarnings.js";
import EmailSent from "./Graphs/EmailSent/EmailSent.js";
import MonthlyEarningsLessIncome from "./Graphs/MonthlyEarningsLessIncome/MonthlyEarningsLessIncome.js";
import CardCollection from "./Information/index.js";
import Transaction from "./Tables/Transaction";
import Order from "./Tables/Order";
import {Wrapper} from "./Tables/Wrapper";

export default render => {
	render (
		<Wrapper>
			<DashBoard />
			<CardCollection />
			<MonthlyEarnings />
			<EmailSent />
			<MonthlyEarningsLessIncome />
			<Transaction />
			<Order />
		</Wrapper>
	);
};