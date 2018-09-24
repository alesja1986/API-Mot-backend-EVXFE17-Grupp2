import React, {Component} from "react";
import { ItemComponent } from "./Item.component";

class Order extends Component {
	constructor() {
		super();
		this.state = {
			orders: []
		};
	}

	componentDidMount() {
		fetch("http://localhost:3001/api/orders/")
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						orders: result
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

	editOrder = (i) => {
		this.state.orders[i].edit = !this.state.orders[i].edit;
		this.forceUpdate();
	}

	saveEdit = (i, item) => {
		let val1 = document.getElementById(`editProductName${i}`).value;
		let val2 = document.getElementById(`editProductStatus${i}`).value;
		let val3 = document.getElementById(`editProductPrice${i}`).value;

		fetch(`http://localhost:3001/api/orders/${item._id}`, {
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
		this.state.orders[i].productname = val1;
		this.state.orders[i].status = val2;
		this.state.orders[i].price = val3;
		this.state.orders[i].edit = false;
		this.forceUpdate();
	}

	render(){
		return (
			<div className="col-xl-6">
				<div className="card m-b-20">
					<div className="card-body">
						<h4 className="mt-0 m-b-30 header-title">Latest Orders</h4>

						<div className="table-responsive">
							<table className="table table-vertical mb-1">

								<tbody>
									{this.state.orders.map((item, i) => {
										return <ItemComponent key={i} index={i} productname={item.productname} status={item.status} price={item.price} created={item.created} editProperties={item.edit} edit={() => this.editOrder(i)} saveEdit={() => this.saveEdit(i, item)} />;
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

export default Order;