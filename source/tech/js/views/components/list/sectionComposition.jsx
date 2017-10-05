import React, { Component, createElement } from "react";
import FontAwesome from "react-fontawesome";
import { isArray, map } from "lodash";

class SectionComposition extends Component {
	getSub(item) {
		if (isArray(item.sub) === false) return null;
		const props = { key: `${item.key}-sub`, className: "sub-level" };
		return createElement("ul", props, this.getLevel(item));
	}

	getLevel(item) {
		return map(item.sub, val => this.getItem(val));
	}

	getItem(val) {
		const icon = SectionComposition.getIcon(val.icon)
		const sub = this.getSub(val);
		return createElement("li", { key: val.key }, icon, val.name, sub);
	}

	static getIcon(icon) {
		return icon ? createElement(FontAwesome, { name: icon }) : null;
	}

	render() {
		return (
			<ul className="first-level" key={`${this.props.item.key}-level`}>
				<li>
					{SectionComposition.getIcon(this.props.item.icon)}
					{this.props.item.name}
				</li>
				{this.getSub(this.props.item)}
			</ul>
		);
	}
}

export default SectionComposition;
