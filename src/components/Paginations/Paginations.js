import React from "react";
import Pagination from "react-bootstrap/Pagination";

const Paginations = (props) => {
	return (
		<>
			{props.pageCount > 0 ? (
				<Pagination className="pagination_div d-flex justify-content-end mx-5">
					<Pagination.Prev onClick={props.prevButtonHandler} />
					<Pagination.Item active={true}>{props.page}</Pagination.Item>
					<Pagination.Next onClick={props.nextButtonHandler} />
				</Pagination>
			) : (
				""
			)}
		</>
	);
};

export default Paginations;
