import React, { Component, createElement } from "react";
import { map } from "lodash";
import FontAwesome from "react-fontawesome";
import ProgramTypeItemComposition from "./programTypeItemComposition.jsx";
import ProgramTypesLinkView from "./projectTypeLinkComposition.jsx";

class ProgramTypesListComposition extends Component {
	render() {
		return (
			<div className="program-types-article">
				{createElement(HeaderIconLinks, { item: { name: "Service" } })}
				<p>Минимальная программная единица</p>

				<div className="project-types-list">
					<div>
						{createElement(HeaderIconLinks, {
							item: { name: "Library" },
							title: "h4"
						})}
						<p>
							Собрание подпрограм и/или объектов и/или классов, оптимизированных
							для использования в отдельных проектах
						</p>
					</div>
					<div>
						{createElement(HeaderIconLinks, {
							item: { name: "CLI" },
							title: "h4"
						})}
						<p>Программа интерфейса коммандной строки</p>
					</div>
				</div>

				<div className="project-types-list">
					<div>
						{createElement(HeaderIconLinks, { item: { name: "Backend" } })}
						<p>Service + Express</p>
						<p>Программа типа Service с серверной надстройкой в виде http (либо любого другого протокола обмена данными) слушателя</p>
					</div>
					<div>
						{createElement(HeaderIconLinks, { item: { name: "Frontend" } })}
						<p>Программа графического интерфейса, предназначенная для запуска в среде браузера</p>
					</div>
				</div>

				{createElement(HeaderIconLinks, { item: { name: "Fullstack" } })}
				<p>Backend + Frontend</p>
				<p>Объеденение серверной и клиентской части</p>

				{createElement(HeaderIconLinks, {
					item: { name: "Standalone" },
					title: "h4"
				})}
				<p>Fullstack + Electron</p>
				<p>Автономное программное решение, для запуска в среде ОС</p>
			</div>
		);
	}
}

class HeaderIconLinks extends Component {
	onClick(icon, e) {
		console.log(this.props.item.name, icon);
	}

	getIcon(options) {
		const param = {
			name: options.icon,
			onClick: this.onClick.bind(this, options.link)
		};
		return createElement(FontAwesome, param);
	}

	render() {
		return createElement(
			this.props.title || "h1",
			null,
			this.props.item.name,
			this.getIcon({ icon: "folder", link: "program-structures" }),
			this.getIcon({ icon: "sliders", link: "configs" })
		);
	}
}

export default ProgramTypesListComposition;
