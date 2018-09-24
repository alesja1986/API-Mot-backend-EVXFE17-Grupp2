import React, {Component} from "react";
import update from "react-addons-update"; // ES6
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

	editTransaction = (i) => {
		this.state.transactions[i].edit = !this.state.transactions[i].edit;
		this.forceUpdate();
	}

	saveEdit = (i, item) => {
		let val1 = document.getElementById(`editName${i}`).value;
		let val2 = document.getElementById(`editStatus${i}`).value;
		let val3 = document.getElementById(`editPrice${i}`).value;

		fetch(`http://localhost:3001/api/transactions/${item._id}`, {
			method: "PUT",
			headers: {
				"Accept": "application/json; test/plain */*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({_id: item._id, name: val1, status: val2, price: val3})
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
			})
			.catch((err) => console.log(err));
		this.state.transactions[i].name = val1;
		this.state.transactions[i].status = val2;
		this.state.transactions[i].price = val3;
		this.state.transactions[i].edit = false;
		this.forceUpdate();
	}

	deleteTransaction = (item, index) => {
		fetch(`http://localhost:3001/api/transactions/${item._id}`, {
			method: "DELETE",
			headers: {
				"Accept": "application/json; test/plain */*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({_id: item._id})
		})
			.catch((err) => console.log(err));
		this.setState({
			transactions: this.state.transactions.filter((_, i) => i !== index)
		});
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
									{this.state.transactions.map((item, i) => {
										return <ItemComponent key={i} index={i} name={item.name} status={item.status} price={item.price} created={item.created} editProperties={item.edit} edit={() => this.editTransaction(i)} saveEdit={() => this.saveEdit(i, item)} deleteItem={() => this.deleteTransaction(item, i)} />;
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