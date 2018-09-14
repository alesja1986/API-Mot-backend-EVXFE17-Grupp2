import React, { Fragment } from "react";

import DashBoard from "./DashBoard/DashBoard.js";
import Info from "./Information/index.js"

export default render => {
	render (
		<Fragment>
			<DashBoard />
			<Info />
		</Fragment>
	);
};