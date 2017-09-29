import React from "react";
import { ComponentStateStore } from "redux-store-controller";
import { words } from "lodash";
import ArticleView from "./articleView.jsx";
import ProgramTypesListComposition from "./programTypes/programTypesListComposition.jsx";
import ProgramStructuresComposition from "./programStructures/programStructuresComposition.jsx";

class ArticleComposition extends ComponentStateStore {
	constructor(props) {
		super({ props, name: "viewport" });
	}

	getArticle() {
		const path = words(this.state.viewport, /[^/ ]+/g);

		switch (path[0]) {
			case "program-types":
				return <ProgramTypesListComposition stores={this.props.stores} />;
			case "program-structures":
				return <ProgramStructuresComposition stores={this.props.stores} />;
			default:
				return <ArticleView stores={this.props.stores} />;
		}
	}

	render() {
		return (
			<article>
				<div className="wrapper">
					<div className="middle">{this.getArticle()}</div>
				</div>
			</article>
		);
	}
}

export default ArticleComposition;
