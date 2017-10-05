import React, { Component } from "react";
import { map } from "lodash";
import ProjectTypeLinkView from "./programTypesLinkView.jsx";

class ProgramTypesLinkComposition extends Component {
	list = ["Структура", "Конфигурации", "Публикация"];

	getItem(item) {
		return <ProjectTypeLinkView key={item} item={item} stores={this.props.stores} />;
	}

	render() {
		return (
			<div className="project-type-content">
				<ul>{map(this.list, item => this.getItem(item))}</ul>
			</div>
		);
	}
}

export default ProgramTypesLinkComposition;
