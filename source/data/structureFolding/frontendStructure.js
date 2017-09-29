export default {
	name: "root",
	toggled: true,
	path: "<Project Directory>",
	desc: "Корневая директория проекта",
	children: [
		{
			name: "node_modules",
			path: "/node_modules",
			desc: "",
			loading: true,
			children: []
		},
		{
			name: "source",
			path: "/source",
			desc: "",
			active: true,
			toggled: true,
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
					name: "client",
					path: "/source/client",
					desc: "",
					children: [
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
						},
						{ name: "style",
							path: "/source/client/style",
							desc: "",
							children: []
						}
					]
				}
			]
		},
		{
			name: "public",
			path: "/public",
			desc: "",
			children: [
				{
					name: "style",
					path: "/public/style",
					desc: "",
					children: [
						{
							name: "style.min.css",
							path: "/public/style/style.min.css",
							desc: ""
						}
					]
				},
				{
					name: "js",
					path: "/public/js",
					desc: "",
					children: [
						{
							name: "main.min.js",
							path: "/public/js/main.min.js",
							desc: ""
						}
					]
				},
				{
					name: "index.html",
					path: "/public/index.html",
					desc: ""
				}
			]
		}
	]
};
