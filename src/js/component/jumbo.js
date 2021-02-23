import React from "react";

export function Jumbotron() {
	return (
		<div className="bg-light p-5 rounded-lg m-3">
			<h1 className="display-4">A warm welcome</h1>
			<p className="lead">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
				dignissim magna. Morbi mattis lobortis sodales. Donec placerat
				semper pharetra.
			</p>
			<hr className="my-4" />
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
				dignissim magna. Morbi mattis lobortis sodales. Donec placerat
				semper pharetra.
			</p>
			<a className="btn btn-primary btn-lg" href="#" role="button">
				Go somewhere
			</a>
		</div>
	);
}
