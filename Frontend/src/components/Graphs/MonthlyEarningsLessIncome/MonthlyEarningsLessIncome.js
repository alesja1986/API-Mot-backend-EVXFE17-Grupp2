import React, { Component, Fragment } from "react";

class MonthlyEarningsLessIncome extends Component {

	render(){
		return(
			<div className="col-xl-3">
				<div className="card m-b-20">
					<div className="card-body">
						<h4 className="mt-0 header-title">Monthly Earnings</h4>

						<div className="row text-center m-t-20">
							<div className="col-6">
								<h5 className="">$ 2548</h5>
								<p className="text-muted ">Marketplace</p>
							</div>
							<div className="col-6">
								<h5 className="">$ 6985</h5>
								<p className="text-muted ">Total Income</p>
							</div>
						</div>

						<div id="morris-bar-stacked" className="dashboard-charts morris-charts"></div>
					</div>
				</div>
			</div>
		);
	}

}

export default MonthlyEarningsLessIncome;