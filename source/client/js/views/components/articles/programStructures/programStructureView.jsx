import React, { Component } from "react";
import { Treebeard, decorators } from "react-treebeard";
import { ComponentStateStore } from "redux-store-controller";
import { map } from "lodash";
import {
	filterTree,
	expandFilteredNodes
} from "~/controllers/filterController";
import StructureFolding from "@/structureFolding";
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
		case "bin":
		case "build":
		case "public":
			titleStyle = style.bundle;
			break;
		case "config":
		case "log":
			titleStyle = style.temp;
			break;
		default:
			break;
	}

	return (
		<div style={style.base} key={node.name}>
			<div key={`${node.name}-title`} style={titleStyle}>
				<i className={iconClass} style={iconStyle} />
				{node.name}
			</div>
			<div key={`${node.name}-types`} className="square-list">
				{map(node.type, type => <div style={style[type]} />)}
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
			this.setState({ tree: StructureFolding });
			return;
		}
		let filtered = filterTree(StructureFolding, filter);
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
	def = {
		name: "Select some tree item",
		path: "",
		desc: ""
	};

	render() {
		const item =
			typeof this.props.item === "undefined" ? this.def : this.props.item;

		return (
			<div className="tree-item-desc">
				<h2>{item.path}</h2>
				<ul className="types">
					{map(item.type, type => <li key={type} style={Theme.tree.node.header[type]}>{type}</li>)}
				</ul>
				<p>{item.desc}</p>
			</div>
		);
	}
}

export default ProgramStructureView;
