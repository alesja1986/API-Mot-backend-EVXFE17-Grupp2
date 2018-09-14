import React from "react";

const Wrapper = ({children}) => (
	<div className="wrapper">
		<div className="container-fluid">
			{children}
		</div>
	</div>
);

export default Wrapper;
