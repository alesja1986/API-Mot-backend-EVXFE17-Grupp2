import React, {Component} from "react";
import { ItemComponent } from "./Item.component";

class Transaction extends Component {
	constructor() {
		super();
		this.state = {
			transactions: []
		};
	}

	componentDidMount() {
		fetch("http://localhost:3001/api/transactions/")
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						transactions: result
					});
				},
				// Note: it's important to handle errors here
				// instead of a catch() block so that we don't swallow
				// exceptions from actual bugs in components.
				(error) => {
					this.setState({
						error
					});
				}
			);
	
	}

	render(){
		return (
			<div className="col-xl-6">
				<div className="card m-b-20">
					<div className="card-body">
						<h4 className="mt-0 m-b-30 header-title">Latest Transactions</h4>

						<div className="table-responsive">
							<table className="table table-vertical">

								<tbody>
									{this.state.transactions.map((item) => {
										return <ItemComponent name={item.name} status={item.status} price={item.price} created={item.created} />;
									})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Transaction;