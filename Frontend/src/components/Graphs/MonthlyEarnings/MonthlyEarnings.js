import React, { Component, Fragment } from "react";
//import morris from "../../../../dist/plugins/morris/morris.min.js";

class MonthlyEarnings extends Component {

	componentDidMount(){

		const promises = [
			fetch("http://localhost:3001/monthlyearningleft/Email")
				.then(result => result.json()),
		
			fetch("http://localhost:3001/monthlyearningleft/Store")
				.then(result => result.json()),

			fetch("http://localhost:3001/monthlyearningleft/Download")
				.then(result => result.json())
		];
		
		Promise.all(promises)
			.then(value => {
				let state = {
					[value[0][0].type]: value[0],
					[value[1][0].type]: value[1],
					[value[2][0].type]: value[2]
				};
				this.setState(state);
				const monthlyearningleft = {
					email: value[0].length,
					store: value[1].length,
					download: value[2].length
				};
				JSON.stringify(monthlyearningleft);
				window.localStorage.setItem("monthlyEarningsLeft", JSON.stringify(monthlyearningleft));
			})
			.catch(error => console.log(error));
	}

	price = () => {
		let sum = "Loading";
		if(this.state !== null){
			sum = 0;
			for(let type in this.state){
				for(let {price} of this.state[type]){
					sum += price;
				}
			}
			// for(let {price} of this.state.Email){
			// 	sum += price;
			// }
		}
		return sum;
	}

	render(){
		return(
			<div className="col-xl-3">
				<div className="card m-b-20">
					<div className="card-body">
						<h4 className="mt-0 header-title">Monthly Earnings</h4>

						<div className="row text-center m-t-20">
							<div className="col-6">
								<h5 className="">$ {this.price()}</h5>
								<p className="text-muted ">Marketplace</p>
							</div>
							<div className="col-6">
								<h5 className="">$23651</h5>
								<p className="text-muted ">Total Income</p>
							</div>
						</div>

						<div id="morris-donut" className="dashboard-charts morris-charts"></div>
					</div>
				</div>
			</div>
		);
	}

}

export default MonthlyEarnings;