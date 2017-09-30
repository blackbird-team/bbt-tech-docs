import React, { createElement } from "react";
import { ComponentStateStore } from "redux-store-controller";
import FontAwesome from "react-fontawesome";
import { includes } from "lodash";

class NavItem extends ComponentStateStore {
	constructor(props) {
		super({ props, name: "viewport" });
	}

	onClick() {
		this.props.stores.viewport.set({ viewport: `/${this.props.item.key}` });
	}

	getIcon() {
		if (typeof this.props.item.icon === "undefined") return null;

		const props = { className: "icon", key: `${this.props.item.key}-icon` };
		const fa = createElement(FontAwesome, { name: this.props.item.icon });
		return createElement("div", props, fa);
	}

	isActive() {
		return includes(this.state.viewport, this.props.item.key) ? "active" : "";
	}

	render() {
		const props = {
			key: `${this.props.item.key}-item`,
			className: this.isActive(),
			onClick: this.onClick.bind(this)
		};
		return createElement(
			"div",
			props,
			this.getIcon(),
			<p>{this.props.item.name}</p>
		);
	}
}

export default NavItem;
