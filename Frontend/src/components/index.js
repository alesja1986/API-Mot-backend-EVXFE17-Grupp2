import React, { Fragment } from "react";

import DashBoard from "./DashBoard/DashBoard.js";
import RecentActivity from "./RecentActivity/RecentActivity.js";
import YearlySales from "./YearlySales/YearlySales.js";


export default render => {
	render (
		<Fragment>
			<DashBoard />
			<RecentActivity/>
			<YearlySales/>
		</Fragment>
	);
};