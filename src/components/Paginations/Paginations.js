import React from "react";
import Pagination from "react-bootstrap/Pagination";

const Paginations = (props) => {
	return (
		<>
			{props.pageCount > 0 ? (
				<Pagination className="pagination_div d-flex justify-content-end mx-5">
					<Pagination.Prev
						disabled={props.page === 1}
						onClick={props.prevButtonHandler}
					/>
					<Pagination.Item active={true}>{props.page}</Pagination.Item>
					<Pagination.Next
						disabled={props.pageCount === props.page}
						onClick={props.nextButtonHandler}
					/>
				</Pagination>
			) : (
				""
			)}
		</>
	);
};

export default Paginations;
