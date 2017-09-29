export default {
	name: "root",
	toggled: true,
	path: "<Project Directory>",
	desc: "Корневая директория проекта",
	children: [
		{
			name: "build",
			path: "/build",
			desc: "",
			children: [
				{
					name: "bundle.min.js",
					path: "/build/bundle.min.js",
					desc: ""
				}
			]
		},
		{
			name: "config",
			path: "/config",
			desc: "",
			children: [
				{
					name: "main.config.json",
					path: "/config/main.config.json",
					desc: ""
				}
			]
		},
		{
			name: "node_modules",
			path: "/node_modules",
			desc: "",
			loading: true,
			children: []
		},
		{
			name: "source",
			active: true,
			toggled: true,
			path: "/source",
			desc: "",
			children: [
				{
					name: "data",
					path: "/source/data",
					desc: "",
					children: [
						{
							name: "config.default.js",
							path: "/source/data/config.default.js",
							desc: ""
						}
					]
				},
				{
					name: "js",
					path: "/source/client/js",
					desc: "",
					children: [
						{
							name: "index.js",
							path: "/source/client/js/index.js",
							desc: ""
						}
					]
				}
			]
		}
	]
};