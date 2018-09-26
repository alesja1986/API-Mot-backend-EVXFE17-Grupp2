
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./Login/Navbar";
import Landing from "./Login/Landing";
import Login from "./Login/Login";
import Register from "./Login/Register";
import Profile from "./Login/Profile";


// import DashBoard from "./DashBoard/DashBoard.js";
// import Login from "./Login/Login.js";
// import Inbox from "./Inbox/Inbox.js";

export default render => {
	render(


		<Router>
			<div className="App">
				<Navbar />
				<Route exact path="/" component={Landing} />
				<div className="container">
					<Route exact path="/register" component={Register} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/profile" component={Profile} />
				</div>
			</div>
		</Router>

	);
};
