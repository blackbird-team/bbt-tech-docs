import React, { Component } from "react";
import { map } from "lodash";
import Config from "@/config";

class ConfigsComposition extends Component {
	list = [
		{
			title: ".babelrc",
			name: "babel"
		},
		{
			title: ".eslintrc",
			name: "eslint"
		},
		{
			title: "Webpack",
			name: "webpack",
			sub: [
				{
					title: "development",
					name: "webpack/dev"
				},
				{
					title: "production",
					name: "webpack/prod"
				}
			]
		},
		{
			title: ".ignore",
			name: "ignore",
			sub: [
				{
					title: ".gitignore",
					name: "gitignore"
				},
				{
					title: ".npmignore",
					name: "npmignore"
				}
			]
		}
	];

	getLevel() {
		return map(this.list, (val, key) => (
			<div key={`${val.name}-${key}`}>
				<h2>{val.title}</h2>
				{ConfigsComposition.getInner(val)}
			</div>
		));
	}

	static getInner(val) {
		return typeof val.sub === "undefined"
			? ConfigsComposition.getProgramTypes(val)
			: ConfigsComposition.getSub(val);
	}

	static getSub(val) {
		return map(val.sub, (sub, key) => (
			<div key={`${sub.name}-${key}`}>
				<h4>{sub.title}</h4>
				{ConfigsComposition.getProgramTypes(sub)}
			</div>
		));
	}

	static getProgramTypes(val) {
		return (
			<ul>
				{map(Config.programTypes, type => (
					<li key={`${val}-${type}`}>
						<a href={`/configs/${val.name}/${type}`}>{type}</a>
					</li>
				))}
			</ul>
		);
	}

	render() {
		return (
			<div className="configs-list">
				<h1>Файлы конфигурации</h1>
				{this.getLevel()}
			</div>
		);
	}
}

export default ConfigsComposition;
