import React, { Fragment } from "react";

import DashBoard from "./DashBoard/DashBoard.js";
import Wrapper from "./Wrapper/Wrapper.js";
import CardCollection from "./Information/index.js";
import Graphs from "./Graphs";
import Tables from "./Tables";

export default render => {
	render (
		<Fragment>
			<DashBoard />
			<Wrapper>
				<CardCollection />
				<Graphs />
				<Tables />
			</Wrapper>
		</Fragment>
	);
};