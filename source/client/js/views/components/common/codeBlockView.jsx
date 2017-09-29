import { Component, createElement } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/styles";

class CodeBlockView extends Component {
	render() {
		return createElement(
			SyntaxHighlighter,
			{
				language: this.props.language,
				style: darcula,
				customStyle: { padding: "15px" }
			},
			this.props.literal
		);
	}
}

export default CodeBlockView;
