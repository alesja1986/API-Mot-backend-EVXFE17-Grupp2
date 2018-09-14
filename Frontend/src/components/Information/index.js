import React, { Fragment, Component } from "react";

import Orders from "./Orders/Orders"
import Revenue from "./Revenue/Revenue"
import AveragePrice from "./Average_Price/Average_price"
import ProductSold from "./Product_sold/Product_sold"

class CardCollection extends Component {
	
	render() {
		return(
			<div className="row">
				<Orders />
				<Revenue />
				<AveragePrice />
				<ProductSold />
			</div>
		);
	}
}

export default CardCollection;