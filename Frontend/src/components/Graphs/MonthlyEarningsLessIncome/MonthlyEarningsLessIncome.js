import React, { Component, Fragment } from "react";

class MonthlyEarningsLessIncome extends Component {

	render(){
		return(
			<div class="col-xl-3">
				<div class="card m-b-20">
					<div class="card-body">
						<h4 class="mt-0 header-title">Monthly Earnings</h4>

						<div class="row text-center m-t-20">
							<div class="col-6">
								<h5 class="">$ 2548</h5>
								<p class="text-muted ">Marketplace</p>
							</div>
							<div class="col-6">
								<h5 class="">$ 6985</h5>
								<p class="text-muted ">Total Income</p>
							</div>
						</div>

						<div id="morris-bar-stacked" class="dashboard-charts morris-charts"></div>
					</div>
				</div>
			</div>
		);
	}

}

export default MonthlyEarningsLessIncome;