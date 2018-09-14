import React, {Component} from "react";

class Transaction extends Component {

	render(){
		return (
			<div className="col-xl-6">
				<div className="card m-b-20">
					<div className="card-body">
						<h4 className="mt-0 m-b-30 header-title">Latest Transactions</h4>

						<div className="table-responsive">
							<table className="table table-vertical">

								<tbody>
									<tr>
										<td>
											<img src="assets/images/users/user-2.jpg" alt="user-image" className="thumb-sm rounded-circle mr-2"/>
												Herbert C. Patton
										</td>
										<td><i className="mdi mdi-checkbox-blank-circle text-success"></i> Confirm</td>
										<td>
										$14,584
											<p className="m-0 text-muted font-14">Amount</p>
										</td>
										<td>
											5/12/2016
											<p className="m-0 text-muted font-14">Date</p>
										</td>
										<td>
											<button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
										</td>
									</tr>

									<tr>
										<td>
											<img src="assets/images/users/user-3.jpg" alt="user-image" className="thumb-sm rounded-circle mr-2"/>
											Mathias N. Klausen
										</td>
										<td><i className="mdi mdi-checkbox-blank-circle text-warning"></i> Waiting payment</td>
										<td>
											$8,541
											<p className="m-0 text-muted font-14">Amount</p>
										</td>
										<td>
											10/11/2016
											<p className="m-0 text-muted font-14">Date</p>
										</td>
										<td>
											<button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
										</td>
									</tr>

									<tr>
										<td>
											<img src="assets/images/users/user-4.jpg" alt="user-image" className="thumb-sm rounded-circle mr-2"/>
											Nikolaj S. Henriksen
										</td>
										<td><i className="mdi mdi-checkbox-blank-circle text-success"></i> Confirm</td>
										<td>
												$954
											<p className="m-0 text-muted font-14">Amount</p>
										</td>
										<td>
											8/11/2016
											<p className="m-0 text-muted font-14">Date</p>
										</td>
										<td>
											<button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
										</td>
									</tr>
									<tr>
										<td>
											<img src="assets/images/users/user-5.jpg" alt="user-image" className="thumb-sm rounded-circle mr-2"/>
											Lasse C. Overgaard
										</td>
										<td><i className="mdi mdi-checkbox-blank-circle text-danger"></i> Payment expired</td>
										<td>
											$44,584
											<p className="m-0 text-muted font-14">Amount</p>
										</td>
										<td>
											7/11/2016
											<p className="m-0 text-muted font-14">Date</p>
										</td>
										<td>
											<button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
										</td>
									</tr>
									<tr>
										<td>
											<img src="assets/images/users/user-6.jpg" alt="user-image" className="thumb-sm rounded-circle mr-2"/>
											Kasper S. Jessen
										</td>
										<td><i className="mdi mdi-checkbox-blank-circle text-success"></i> Confirm</td>
										<td>
												$8,844
											<p className="m-0 text-muted font-14">Amount</p>
										</td>
										<td>
											1/11/2016
											<p className="m-0 text-muted font-14">Date</p>
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

export default Transaction;