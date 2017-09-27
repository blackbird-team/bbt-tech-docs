import React, { Component } from "react";
import { map } from "lodash";
import ProgramTypeItemComposition from "./programTypeItemComposition.jsx";

class ProgramTypesListComposition extends Component {
	list = [
		{
			name: "front-end",
			desc: "GUI"
		},
		{
			name: "back-end",
			desc: "Express"
		},
		{
			name: "full-stack",
			desc: "Back-end + n * Front-end"
		},
		{
			name: "standalone",
			desc: "Desktop app ( Electron )"
		},
		{
			name: "service",
			desc: "Background service"
		},
		{
			name: "npm module",
			desc: "Library"
		}
	];

	getItem(item) {
		return <ProgramTypeItemComposition item={item} stores={this.props.stores} />;
	}

	render() {
		return (
			<div className="project-types-list">
				{map(this.list, item => this.getItem(item))}
			</div>
		);
	}
}

export default ProgramTypesListComposition;
