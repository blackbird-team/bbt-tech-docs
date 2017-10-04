const TableOfContent = [
	{
		key: "home",
		name: "Оглавление",
		icon: "home"
	},
	{
		key: "environment",
		name: "Среда разработки",
		icon: "terminal",
		sub: [
			{
				key: "cvs",
				name: "Система контроля версий"
			},
			{
				key: "platform",
				name: "Платформа"
			},
			{
				key: "ide",
				name: "Интегрированная среда разработки"
			}
		]
	},
	{
		key: "cvs-rules",
		name: "CVS",
		icon: "code-fork",
		sub: [
			{
				key: "commit",
				name: "Коммит",
				sub: [
					{
						key: "commit-ензу",
						name: "Назначение"
					},
					{
						key: "commit-scopes",
						name: "Область применения"
					},
					{
						key: "commit-comment",
						name: "Комментарий"
					}
				]
			}
		]
	},
	{
		key: "pattern",
		name: "Паттерн",
		icon: "code",
		sub: [
			{
				key: "names",
				name: "Правила именования"
			},
			{
				key: "javascript",
				name: "JavaScript",
				sub: [
					{
						key: "js-common",
						name: "Общие правила"
					},
					{
						key: "js-scope",
						name: "Область видимости",
						sub: [
							{
								key: "var",
								name: "Переменные"
							},
							{
								key: "func",
								name: "Методы/Функции"
							}
						]
					}
				]
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
				key: "babel",
				name: "Babel"
			},
			{
				key: "eslint",
				name: "ESLint"
			},
			{
				key: "webpack",
				name: "Webpack"
			}
		]
	},
	{
		key: "dev-scenario",
		name: "Сценарии",
		icon: "map-signs"
	},
	{
		key: "program-types",
		name: "Типы программ",
		icon: "tags",
		sub: [
			{
				name: "Service",
				key: "service",
				sub: [
					{
						name: "Library",
						key: "lib"
					},
					{
						name: "Command Line Interface",
						key: "CLI"
					}
				]
			},
			{
				name: "Backend",
				key: "backend"
			},
			{
				name: "Frontend",
				key: "frontend"
			},
			{
				name: "Fullstack",
				key: "fullstack",
				sub: [
					{
						name: "Standalone",
						key: "standalone"
					}
				]
			}
		]
	},
	{
		key: "program-structures",
		name: "Структуры программ",
		icon: "folder"
	},
	{
		key: "configs",
		name: "Конфигурации",
		icon: "sliders",
		sub: [
			{
				name: ".eslintrc",
				key: ".eslintrc"
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
