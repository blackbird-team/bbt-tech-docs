const TableOfContent = [
	{
		key: "home",
		name: "Оглавление",
		icon: "home"
	},
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
				name: "commit-name"
			},
			{
				key: "commit-scopes",
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
				name: "names",
				key: "names"
			},
			{
				name: "scopes",
				key: "scopes"
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
				name: "babel",
				key: "babel"
			},
			{
				name: "lint",
				key: "lint"
			},
			{
				name: "webpack",
				key: "webpack"
			},
			{
				name: "idea",
				key: "idea"
			},
			{
				name: "text-editor",
				key: "text-editor"
			},
			{
				name: "sass",
				key: "sass"
			}
		]
	},
	{
		key: "dev-scenario",
		name: "Сценарии",
		icon: "map-signs",
		sub: [
			{
				name: "init",
				key: "init"
			},
			{
				name: "bundle",
				key: "bundle"
			},
			{
				name: "publish",
				key: "publish"
			},
			{
				name: "release",
				key: "release"
			}
		]
	},
	{
		key: "program-types",
		name: "Типы программ",
		icon: "tags",
		sub: [
			{
				name: "front",
				key: "front"
			},
			{
				name: "service",
				key: "service"
			},
			{
				name: "back",
				key: "back"
			},
			{
				name: "server",
				key: "server"
			},
			{
				name: "standalone",
				key: "standalone"
			},
			{
				name: "npm-module",
				key: "npm-module"
			}
		]
	},
	{
		key: "program-structures",
		name: "Структуры программ",
		icon: "folder",
		sub: [
			{
				name: "front",
				key: "front"
			},
			{
				name: "service",
				key: "service"
			},
			{
				name: "back",
				key: "back"
			},
			{
				name: "server",
				key: "server"
			},
			{
				name: "standalone",
				key: "standalone"
			},
			{
				name: "npm-module",
				key: "npm-module"
			}
		]
	},
	{
		key: "configs",
		name: "Конфигурации",
		icon: "sliders",
		sub: [
			{
				name: ".babelrc",
				key: ".babelrc"
			},
			{
				name: ".eslintrc",
				key: ".eslintrc"
			},
			{
				name: "webpack.config",
				key: "webpack.config"
			},
			{
				name: ".gitignore",
				key: ".gitignore"
			},
			{
				name: ".npmignore",
				key: ".npmignore"
			}
		]
	}
];

export default TableOfContent;