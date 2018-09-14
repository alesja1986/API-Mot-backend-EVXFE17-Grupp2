import React, { Fragment, Component } from "react";

import Orders from "./Orders/Orders"
import Revenue from "./Revenue/Revenue"
import AveragePrice from "./Average_Price/Average_price"
import ProductSold from "./Product_sold/Product_sold"

class CardCollection extends Component {
	
	render() {
		return(
			<Fragment>
				<Orders />
				<Revenue />
				<AveragePrice />
				<ProductSold />
			</Fragment>
		);
	}
}

export default CardCollection;