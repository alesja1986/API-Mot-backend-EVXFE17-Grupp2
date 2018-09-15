import React from "react";

export const ItemComponent = ({name, status, price, created}) => (
	<tr>
		<td>
			<img src="assets/images/users/user-2.jpg" alt="user-image" className="thumb-sm rounded-circle mr-2"/>
			{name}
		</td>
		{status === "Expired" && 
			<td><i className="mdi mdi-checkbox-blank-circle text-danger"></i>{status}</td>
		}
		{status === "Waiting" && 
			<td><i className="mdi mdi-checkbox-blank-circle text-warning"></i>{status}</td>
		}
		{status === "Confirmed" && 
			<td><i className="mdi mdi-checkbox-blank-circle text-success"></i>{status}</td>
		}
		<td>
			{price}
			<p className="m-0 text-muted font-14">Amount</p>
		</td>
		<td>
			{created}
			<p className="m-0 text-muted font-14">Date</p>
		</td>
		<td>
			<button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
		</td>
	</tr>
);
