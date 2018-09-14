import React, { Component, Fragment } from "react";

class EmailSent extends Component {

	render(){
		return(
			<div class="col-xl-6">
				<div class="card m-b-20">
					<div class="card-body">
						<h4 class="mt-0 header-title">Email Sent</h4>

						<div class="row text-center m-t-20">
							<div class="col-4">
								<h5 class="">$ 89425</h5>
								<p class="text-muted ">Marketplace</p>
							</div>
							<div class="col-4">
								<h5 class="">$ 56210</h5>
								<p class="text-muted ">Total Income</p>
							</div>
							<div class="col-4">
								<h5 class="">$ 8974</h5>
								<p class="text-muted ">Last Month</p>
							</div>
						</div>

						<div id="morris-area-example" class="dashboard-charts morris-charts"></div>
					</div>
				</div>
			</div>
		);
	}

}

export default EmailSent;