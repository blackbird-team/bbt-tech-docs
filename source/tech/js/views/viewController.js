import { createElement } from "react";
import { render } from "react-dom";

import NavComposition from "./components/nav/navComposition.jsx";
// import FooterComposition from "./components/footer/footerComposition";
import IndexView from "./indexView";

class ViewController {
	constructor(options) {
		render(
			createElement(
				"div",
				{ id: "wrapper" },
				createElement(NavComposition, options),
				createElement(IndexView, options),
				// createElement(FooterComposition, options)
			),
			document.getElementById("container")
		);
	}
}

export default ViewController;