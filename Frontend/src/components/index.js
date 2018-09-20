import React, { Fragment } from "react";

import DashBoard from "./DashBoard/DashBoard.js";
import Login from "./Login/Login.js";
import Inbox from "./Inbox/App.js";

export default render => {
	render(
		<Fragment>
			{/* <DashBoard /> */}
			<Inbox />
			{/* <Login /> */}
		</Fragment>
	);
};