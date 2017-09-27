import React, { Component } from "react";
import { capitalize } from "lodash";
import ProgramTypesLinkView from "./projectTypeLinkComposition.jsx";

class ProgramTypesListComposition extends Component {
	render() {
		return (
			<div>
				<div key={this.props.item.name} className="project-type-title">
					<h2>{capitalize(this.props.item.name)}</h2>
					<p>{this.props.item.desc}</p>
				</div>
				<ProgramTypesLinkView stores={this.props.stores} />
			</div>
		);
	}
}

export default ProgramTypesListComposition;
