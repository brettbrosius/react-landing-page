import React from "react";

import { Navbar } from "/workspace/react-hello/src/js/component/nav";
import { Card } from "./cards";
import { Jumbotron } from "./jumbo";

export function App() {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<div className="container-fluid">
				<div className="row">
					<Card content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel diam nisi. Donec eu efficitur nisi, non blandit nulla. " />
					<Card content="Sed faucibus malesuada nulla, a auctor sapien porttitor a. Ut augue ante, dapibus ut varius et, fringilla id turpis. " />
					<Card content="Nullam sed nisl et justo volutpat dapibus a sed urna. Vestibulum egestas, purus venenatis convallis vehicula, elit elit hendrerit lacus" />
					<Card content="Duis convallis ornare tellus vitae laoreet. Etiam nec quam sapien. Vestibulum quis ipsum ligula." />
				</div>
			</div>
		</>
	);
}
