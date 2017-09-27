import { Component, createElement } from "react";
import ReactMarkdown from "react-markdown";
import forEach from "lodash/forEach";
import Config from "@/config";

class ArticleView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			article: null
		};
	}

	componentWillMount() {
		this.getApi();
	}

	componentWillReceiveProps() {
		this.getApi();
	}

	getApi() {
		const st = this.props.stores;
		fetch(
			`http://localhost:${Config.port}/md/${st.viewport.getStore
				.viewport}`
		)
			.then(res => res.json())
			.then(res => {
				this.setState({ article: res.message });
			});
	}

	getArticle() {
		return createElement(ReactMarkdown, {
			source: this.state.article
		});
	}

	render() {
		return this.state.article == null ? false : this.getArticle();
	}

	componentDidUpdate() {
		const a = document
			.getElementsByClassName("middle")[0]
			.getElementsByTagName("a");

		forEach(a, elem => {
			elem.addEventListener("click", this.clickHandler.bind(this));
		});
	}

	clickHandler(e) {
		e.preventDefault();
		const vp = this.props.stores.viewport;

		vp.set({
			viewport: e.target.pathname+e.target.hash
		});
	}
}

export default ArticleView;