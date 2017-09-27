import React from "react";
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
		return this.props.item.icon ? (
			<div className="icon">
				<FontAwesome name={this.props.item.icon} />
			</div>
		) : null;
	}

	isActive() {
		return includes(this.state.viewport, this.props.item.key) ? "active" : "";
	}

	render() {
		return (
			<div
				key={this.props.item.key}
				className={this.isActive()}
				onClick={this.onClick.bind(this)}
			>
				{this.getIcon()}
				<p>{this.props.item.name}</p>
			</div>
		);
	}
}

export default NavItem;
