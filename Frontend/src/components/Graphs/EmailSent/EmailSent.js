import React, { Component, Fragment } from "react";

class EmailSent extends Component {

	componentDidMount(){
		fetch("http://localhost:3001/email")
			.then(result => result.json())
			.then(res => {
				let state = {};
				let data = [];

				//Sort and order years and values
				for(let type in res){
					if(state[new Date(res[type].created).getFullYear()] !== undefined){
						state[new Date(res[type].created).getFullYear()] += 1;
					}else{
						state = {
							...state,
							[new Date(res[type].created).getFullYear()]: 1,
						};
					}
				}

				//format for Morris Graph - 
				for(let type in state){
					data = [
						...data,
						{ y: type, a: state[type] }
					];
				}
				this.setState({
					...state
				});
				window.localStorage.setItem("emailGraph", JSON.stringify(data));
			})
			.catch(error => console.log(error));
	}

	year = (current = false) => {
		let sum = "loading";
		if(this.state !== null){
			sum = 0;
			if(current !== false){
				sum = this.state[current];
				return sum;
			}
			for(let year in this.state){
				sum += this.state[year];
			}
		}
		return sum;
	}

	render(){

		// if(res !== null){
		// 	this.year(new Date().getFullYear());
		// }
		return(
			<div className="col-xl-6">
				<div className="card m-b-20">
					<div className="card-body">
						<h4 className="mt-0 header-title">Email Sent</h4>

						<div className="row text-center m-t-20">
							<div className="col-4">
								<h5 className="">{this.year(new Date().getFullYear())}</h5>
								<p className="text-muted ">This Year</p>
							</div>
							<div className="col-4">
								<h5 className="">{this.year()}</h5>
								<p className="text-muted ">Total Emails</p>
							</div>
						</div>

						<div id="morris-area" className="dashboard-charts morris-charts"></div>
					</div>
				</div>
			</div>
		);
	}

}

export default EmailSent;