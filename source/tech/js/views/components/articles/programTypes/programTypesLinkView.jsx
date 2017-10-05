import React, { Component } from "react";

class ProgramTypesLinkView extends Component {
	onClick() {
		this.props.stores.viewport.set({ viewport: `/program-types/${this.props.item}` })
	}

	render() {
		return (
			<li onClick={this.onClick.bind(this)}>{this.props.item}</li>
		);
	}
}

export default ProgramTypesLinkView;
