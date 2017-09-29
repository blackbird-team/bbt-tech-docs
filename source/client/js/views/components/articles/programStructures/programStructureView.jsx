import React, { Component } from "react";
import { Treebeard, decorators } from "react-treebeard";
import { ComponentStateStore } from "redux-store-controller";
import {
	filterTree,
	expandFilteredNodes
} from "~/controllers/filterController";
import StructureFolding from "@/structureFolding/index";
import Theme from "./theme";

// Example: Customising The Header Decorator To Include Icons
decorators.Header = ({ style, node }) => {
	const iconType = node.children ? "folder" : "file-text";
	const iconClass = `fa fa-${iconType}`;
	const iconStyle = { marginRight: "5px" };

	let titleStyle = style.title;

	switch (node.name) {
		case "node_modules":
			titleStyle = style.libs;
			break;
		case "build":
		case "config":
		case "public":
			titleStyle = style.bundle;
			break;
		default:
			break;
	}

	return (
		<div style={style.base}>
			<div style={titleStyle}>
				<i className={iconClass} style={iconStyle} />

				{node.name}
			</div>
		</div>
	);
};

class ProgramStructureView extends ComponentStateStore {
	constructor(props) {
		super({ props, name: "programStructureView" });
	}

	onFilterMouseUp(e) {
		const filter = e.target.value.trim();
		if (!filter) {
			this.setState({ tree: StructureFolding[this.state.tab] });
			return;
		}
		let filtered = filterTree(StructureFolding[this.state.tab], filter);
		filtered = expandFilteredNodes(filtered, filter);
		this.setState({ tree: filtered });
	}

	onToggle(node, toggled) {
		const n = node;
		if (this.state.cursor) {
			this.state.cursor.active = false;
		}
		n.active = true;
		if (node.children) {
			n.toggled = toggled;
		}
		this.setState({ cursor: n });
	}

	render() {
		return (
			<div>
				<input
					className="form-control"
					onKeyUp={this.onFilterMouseUp.bind(this)}
					placeholder="Search the tree..."
					type="text"
				/>
				<div className="tree-column">
					<div>
						<Treebeard
							data={this.state.tree}
							decorators={decorators}
							theme={Theme}
							onToggle={this.onToggle.bind(this)}
						/>
					</div>
					<TreeItemDescView item={this.state.cursor} />
				</div>

			</div>
		);
	}
}

class TreeItemDescView extends Component {
	def= {
		name: "Select some tree item",
		path: "",
		desc: ""
	};

	render() {
		const item = typeof this.props.item === "undefined" ? this.def : this.props.item;

		return (<div>
			<h2>{item.path}</h2>
			<p>{item.desc}</p>
		</div>)
	}
}

export default ProgramStructureView;
