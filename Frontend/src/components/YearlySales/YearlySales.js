import React, {Component} from "react";

class YearlySales extends Component {

	render(){
		return (
			<div className="card m-b-20">
			<div className="card-body">
				<h4 className="mt-0 header-title">Yearly Sales</h4>
				<div className="row">
					<div className="col-md-4">
						<div>
							<h4>52,345</h4>
							<p className="text-muted">The languadges only differ grammars</p>
							<a href="#" className="text-primary">Learn more <i className="mdi mdi-chevron-double-right"></i></a>
						</div>
					</div>
					<div className="col-md-8 text-right">
						<div id="sparkline"></div>
					</div>
				</div>
			</div>
		</div>
		);
	}
}

export default YearlySales;