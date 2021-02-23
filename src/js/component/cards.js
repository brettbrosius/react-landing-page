import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="card col-3">
			<img
				src="https://via.placeholder.com/300"
				className="card-img-top"
			/>
			<div className="card-body">
				<h5 className="card-title">Card Title</h5>
				<p className="card-text">{props.content}</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
}
Card.propTypes = {
	content: PropTypes.string
};
