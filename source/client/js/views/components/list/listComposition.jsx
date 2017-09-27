import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import { map, isArray } from "lodash";
import TableOfContent from "@/tableOfContent";

class ListComposition extends Component {
	getList() {
		return map(TableOfContent, (val, key) => (
			<ul key={key}>{this.getSub(val)}</ul>
		));
	}

	getSub(val) {
		if (isArray(val.sub) === false) return this.getItem(val);
		return (
			<li key={val.key}>
				{val.icon ? <FontAwesome name={val.icon} /> : null}
				{val.name}
				<ul key={val.key}> {map(val.sub, v => this.getSub(v))} </ul>
			</li>
		);
	}

	// eslint-disable-next-line
	getItem(item) {
		return (
			<li key={item.key}>
				{item.icon ? <FontAwesome name={item.icon} /> : null}
				{item.name}
			</li>
		);
	}

	render() {
		return <div>{this.getList()}</div>;
	}
}

export default ListComposition;
