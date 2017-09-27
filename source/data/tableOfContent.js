const TableOfContent = [
	{
		key: "environment",
		name: "Среда разработки",
		icon: "terminal"
	},
	{
		key: "cvs-rules",
		name: "CVS",
		icon: "code-fork",
		sub: [
			{
				key: "commit-name",
				name: ""
			},
			{
				name: "commit-scopes"
			}
		]
	},
	{
		key: "pattern",
		name: "Паттерн",
		icon: "code",
		sub: [
			{
				name: "names"
			},
			{
				name: "scopes"
			}
		]
	},
	{
		key: "dev-scenario",
		name: "Сценарии",
		icon: "map-signs",
		sub: [
			{
				name: "init"
			},
			{
				name: "bundle"
			},
			{
				name: "publish"
			},
			{
				name: "release"
			}
		]
	},
	{
		key: "program-types",
		name: "Типы программ",
		icon: "tags",
		sub: [
			{
				name: "front"
			},
			{
				name: "service"
			},
			{
				name: "back"
			},
			{
				name: "server"
			},
			{
				name: "standalone"
			},
			{
				name: "npm-module"
			}
		]
	},
	{
		key: "documents",
		name: "Нормы документация",
		icon: "book"
	},
	{
		key: "tools",
		name: "Инструменты",
		icon: "cogs",
		sub: [
			{
				name: "babel"
			},
			{
				name: "lint"
			},
			{
				name: "webpack"
			},
			{
				name: "idea"
			},
			{
				name: "text-editor"
			},
			{
				name: "sass"
			}
		]
	},
	{
		key: "configs",
		name: "Конфигурации",
		icon: "sliders",
		sub: [
			{
				name: ".babelrc"
			},
			{
				name: ".eslintrc"
			},
			{
				name: "webpack.config"
			},
			{
				name: ".gitignore"
			},
			{
				name: ".npmignore"
			}
		]
	}
];

export default TableOfContent;