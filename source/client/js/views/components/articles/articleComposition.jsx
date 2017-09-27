import React from "react";
import { ComponentStateStore } from "redux-store-controller";
import ArticleView from "./articleView.jsx";
import ProgramTypesListComposition from "./programTypes/programTypesListComposition.jsx";

class ArticleComposition extends ComponentStateStore {
	constructor(props) {
		super({ props, name: "viewport" });
	}

	getArticle() {
		const path = this.state.viewport.replace("/", "");

		switch (path) {
			case "program-types":
				return <ProgramTypesListComposition stores={this.props.stores} />;
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
