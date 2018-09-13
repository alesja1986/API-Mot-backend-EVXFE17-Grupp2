import React, { Fragment } from "react";

import DashBoard from "./DashBoard/DashBoard.js";
import Login from "./Login/Login.js";
import Inbox from "./Inbox/Inbox.js";

export default render => {
	render(
		<Fragment>
			<DashBoard />
		</Fragment>
	);
};