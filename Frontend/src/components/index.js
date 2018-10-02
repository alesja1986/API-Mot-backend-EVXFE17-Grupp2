
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


import Landing from "./Auth/Landing";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Main from "./Auth/Main";



export default render => {
	render(
		<Router>
			<div className="App">

				<Route exact path="/" component={Landing} />
				
					<Route exact path="/register" component={Register} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/main" component={Main} />
			
			</div>
		</Router>
	);
};