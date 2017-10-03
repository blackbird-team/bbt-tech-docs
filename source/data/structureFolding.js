export default {
	name: "root",
	toggled: true,
	type: ["fullstack"],
	path: "<Project Directory>",
	desc: "Корневая директория проекта",
	children: [
		{
			name: "build",
			type: ["service"],
			path: "/build",
			desc: "",
			children: [
				{
					name: "bundle.min.js",
					type: ["service"],
					path: "/build/bundle.min.js",
					desc: ""
				}
			]
		},
		{
			name: "config",
			type: ["service"],
			path: "/config",
			desc: "",
			children: [
				{
					name: "main.config.json",
					type: ["service"],
					path: "/config/main.config.json",
					desc: ""
				},
				{
					name: "electron.config.json",
					type: ["standalone"],
					path: "/config/electron.config.json",
					desc: ""
				}
			]
		},
		{
			name: "node_modules",
			type: ["service", "frontend"],
			path: "/node_modules",
			desc: "",
			loading: true,
			children: []
		},
		{
			name: "source",
			type: ["service", "frontend"],
			path: "/source",
			desc: "",
			toggled: true,
			children: [
				{
					name: "data",
					type: ["service"],
					path: "/source/data",
					desc: "",
					children: [
						{
							name: "config.default.js",
							type: ["service"],
							path: "/source/data/config.default.js",
							desc: ""
						},
						{
							name: "electron.config.default.js",
							type: ["standalone"],
							path: "/source/data/electron.config.default.js",
							desc: ""
						}
					]
				},
				{
					name: "client",
					type: ["frontend"],
					path: "/source/client",
					desc: "",
					children: [
						{
							name: "js",
							type: ["frontend"],
							path: "/source/client/js",
							desc: "",
							children: [
								{
									name: "index.js",
									type: ["frontend"],
									path: "/source/client/js/index.js",
									desc: ""
								}
							]
						},
						{ name: "style", children: [] }
					]
				},
				{
					name: "js",
					type: ["service"],
					path: "/source/js",
					desc: "",
					children: [
						{
							name: "index.js",
							type: ["service"],
							path: "/source/js/index.js",
							desc: ""
						},
						{
							name: "electron",
							type: ["standalone"],
							path: "/source/js/electron",
							desc: "",
							children: [
								{
									name: "index.js",
									type: ["standalone"],
									path: "/source/js/electron/index.js",
									desc: ""
								}
							]
						}
					]
				},
				{
					name: "md",
					type: ["backend"],
					path: "/source/md",
					desc: "",
					children: []
				}
			]
		},
		{
			name: "public",
			type: ["frontend"],
			path: "/public",
			desc: "",
			children: [
				{
					name: "style",
					type: ["frontend"],
					path: "/public/style",
					desc: "",
					children: [
						{
							name: "style.min.css",
							type: ["frontend"],
							path: "/public/style/style.min.css",
							desc: "",
						}
					]
				},
				{
					name: "js",
					type: ["frontend"],
					path: "/public/js",
					desc: "",
					children: [
						{
							name: "main.min.js",
							type: ["frontend"],
							path: "/public/js",
							desc: "",
						}
					]
				},
				{
					name: "index.html",
					type: ["frontend"],
					path: "/public/index.html",
					desc: ""
				}
			]
		}
	]
};
