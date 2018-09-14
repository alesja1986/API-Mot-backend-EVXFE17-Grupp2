import React, {Component} from "react";

class Order extends Component {

	render(){
		return (
			<div className="col-xl-6">
				<div className="card m-b-20">
					<div className="card-body">
						<h4 className="mt-0 m-b-30 header-title">Latest Orders</h4>

						<div className="table-responsive">
							<table className="table table-vertical mb-1">

								<tbody>
									<tr>
										<td>#12354781</td>
										<td>
											<img src="assets/images/users/user-1.jpg" alt="user-image" className="thumb-sm mr-2 rounded-circle"/>
                                                Riverston Glass Chair
										</td>
										<td><span className="badge badge-pill badge-success">Delivered</span></td>
										<td>
                                                $185
										</td>
										<td>
                                                5/12/2016
										</td>
										<td>
											<button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
										</td>
									</tr>

									<tr>
										<td>#52140300</td>
										<td>
											<img src="assets/images/users/user-2.jpg" alt="user-image" className="thumb-sm mr-2 rounded-circle"/>
                                                Shine Company Catalina
										</td>
										<td><span className="badge badge-pill badge-success">Delivered</span></td>
										<td>
                                                $1,024
										</td>
										<td>
                                                5/12/2016
										</td>
										<td>
											<button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
										</td>
									</tr>

									<tr>
										<td>#96254137</td>
										<td>
											<img src="assets/images/users/user-3.jpg" alt="user-image" className="thumb-sm mr-2 rounded-circle"/>
                                                Trex Outdoor Furniture Cape
										</td>
										<td><span className="badge badge-pill badge-danger">Cancel</span></td>
										<td>
                                                $657
										</td>
										<td>
                                                5/12/2016
										</td>
										<td>
											<button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
										</td>
									</tr>

									<tr>
										<td>#12365474</td>
										<td>
											<img src="assets/images/users/user-4.jpg" alt="user-image" className="thumb-sm mr-2 rounded-circle"/>
                                                Oasis Bathroom Teak Corner
										</td>
										<td><span className="badge badge-pill badge-warning">Shipped</span></td>
										<td>
                                                $8451
										</td>
										<td>
                                                5/12/2016
										</td>
										<td>
											<button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
										</td>
									</tr>

									<tr>
										<td>#85214796</td>
										<td>
											<img src="assets/images/users/user-5.jpg" alt="user-image" className="thumb-sm mr-2 rounded-circle"/>
                                                BeoPlay Speaker
										</td>
										<td><span className="badge badge-pill badge-success">Delivered</span></td>
										<td>
                                                $584
										</td>
										<td>
                                                5/12/2016
										</td>
										<td>
											<button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
										</td>
									</tr>
									<tr>
										<td>#12354781</td>
										<td>
											<img src="assets/images/users/user-6.jpg" alt="user-image" className="thumb-sm mr-2 rounded-circle"/>
                                                Riverston Glass Chair
										</td>
										<td><span className="badge badge-pill badge-success">Delivered</span></td>
										<td>
                                                $185
										</td>
										<td>
                                                5/12/2016
										</td>
										<td>
											<button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
										</td>
									</tr>

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