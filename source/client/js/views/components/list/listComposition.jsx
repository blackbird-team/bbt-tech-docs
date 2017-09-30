import { Component, createElement } from "react";
import { map } from "lodash";
import TableOfContent from "@/tableOfContent";
import SectionComposition from "./sectionComposition.jsx";

class ListComposition extends Component {
	static getList() {
		return map(TableOfContent, item => ListComposition.getItem(item));
	}

	static getItem(item) {
		const props = { item, key: item.key };
		return createElement(SectionComposition, props);
	}

	render() {
		const props = { className: "list-of-content" };
		return createElement("article", props, ListComposition.getList());
	}
}

export default ListComposition;
