import React, {Fragment} from "react";

export const ItemComponent = ({name, status, price, created, edit, editProperties, saveEdit, deleteItem, index}) => (
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
			<button type="button" className="btn btn-secondary btn-sm waves-effect waves-light" onClick={edit}>Edit</button>
		</td>
		<td>
			<button type="button" className="btn btn-danger btn-sm waves-effect waves-light" onClick={deleteItem}>Delete</button>
		</td>
		{editProperties === true && 
		<Fragment>
			<td>
				<input type="text" placeholder="edit name..." id={`editName${index}`} defaultValue={name} />
			</td>
			<td>
				<select id={`editStatus${index}`} defaultValue={status}>
					<option>Confirmed</option>
					<option>Waiting</option>
					<option>Expired</option>
				</select>
			</td>
			<td>
				<input type="text" placeholder="edit price..." id={`editPrice${index}`} defaultValue={price} />
			</td>
			<td>
				<button type="submit" onClick={saveEdit}>Submit</button>
			</td>
		</Fragment>
		}
	</tr>
);
