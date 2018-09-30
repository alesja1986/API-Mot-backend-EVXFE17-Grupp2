import React, {Fragment} from "react";

export const ItemComponent = ({productname, status, price, created, index, editProperties, edit, saveEdit}) => (
	<tr>
		<td>
			<img src="assets/images/users/user-1.jpg" alt="user-image" className="thumb-sm mr-2 rounded-circle"/>
			{productname}
		</td>
		{status === "Cancelled" && 
			<td><span className="badge badge-pill badge-danger">{status}</span></td>
		}
		{status === "Shipped" &&
			<td><span className="badge badge-pill badge-warning">{status}</span></td>
		}
		{status === "Delivered" && 
			<td><span className="badge badge-pill badge-success">{status}</span></td>
		}
		<td>
			{price}
		</td>
		<td>
			{created}
		</td>
		<td>
			<button type="button" className="btn btn-secondary btn-sm waves-effect waves-light" onClick={edit}>Edit</button>
		</td>
		{editProperties === true && 
		<Fragment>
			<td>
				<input type="text" placeholder="edit product name..." id={`editProductName${index}`} defaultValue={productname} />
			</td>
			<td>
				<select id={`editProductStatus${index}`} defaultValue={status}>
					<option>Delivered</option>
					<option>Shipped</option>
					<option>Cancelled</option>
				</select>
			</td>
			<td>
				<input type="text" placeholder="edit price..." id={`editProductPrice${index}`} defaultValue={price} />
			</td>
			<td>
				<button type="submit" onClick={saveEdit}>Submit</button>
			</td>
		</Fragment>
		}
	</tr>
);
