import React, { Component } from "react";
import { ComponentStateStore } from "redux-store-controller";
import { map } from "lodash";
import { resolve } from "path";
import Config from "@/config";
import ProgramStructureView from "./programStructureView.jsx";

class ProgramStructuresComposition extends Component {
	getTabMenu() {
		return map(Config.programTypes, val => (
			<TabMenuItem key={val.name} item={val} stores={this.props.stores} />
		));
	}

	render() {
		return (
			<div>
				{/*<div className="tab-menu">*/}
					{/*{this.getTabMenu()}*/}
				{/*</div>*/}
				<ProgramStructureView stores={this.props.stores} />
			</div>
		);
	}
}

class TabMenuItem extends ComponentStateStore {
	constructor(props) {
		super({ props, name: "programStructureTab" });
	}

	onClick() {
		this.props.stores.programStructureTab.set({ tab: this.props.item.name });
		this.props.stores.viewport.set({
			viewport: resolve(
				this.state.viewport,
				`/program-structures/${this.props.item.name}`
			)
		});
	}

	isActive() {
		return this.state.tab === this.props.item.name ? "active tab-menu-item" : "tab-menu-item";
	}

	render() {
		return (
			<div onClick={this.onClick.bind(this)} className={this.isActive()}>
				{this.props.item.name}
			</div>
		);
	}
}

export default ProgramStructuresComposition;
