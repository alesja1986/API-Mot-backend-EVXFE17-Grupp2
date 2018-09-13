import React from "react";

export const Wrapper = ({children}) => (
	<div className="container-fluid">
		<div className="row">
			{children}
		</div>
	</div>
);
