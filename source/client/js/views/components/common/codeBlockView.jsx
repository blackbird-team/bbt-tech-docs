import { Component, createElement } from "react";
import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/dist/light"
import js from 'react-syntax-highlighter/dist/languages/javascript';
import json from 'react-syntax-highlighter/dist/languages/json';
import darcula from "react-syntax-highlighter/dist/styles/darcula";

registerLanguage('javascript', js);
registerLanguage('json', json);

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
