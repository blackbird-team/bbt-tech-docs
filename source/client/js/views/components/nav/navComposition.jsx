import { Component, createElement } from "react";
import { map } from "lodash";
import TableOfContent from "@/tableOfContent";
import NavItem from "./navItem.jsx";

class NavComposition extends Component {
	getList() {
		return map(TableOfContent, val => this.getItem(val));
	}

	getItem(val) {
		const options = {
			key: val.key,
			item: val,
			history: this.props.history,
			stores: this.props.stores
		};

		return createElement(NavItem, options, createElement());
	}

	render() {
		const home = {
			key: "home",
			name: "home",
			icon: "home"
		};

		return createElement("nav", null, this.getItem(home), this.getList());
	}
}

export default NavComposition;
