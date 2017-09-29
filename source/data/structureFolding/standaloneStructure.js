export default {
	name: "root",
	toggled: true,
	key: "root",
	children: [
		{
			name: "build",
			children: [
				{
					name: "bundle.min.js"
				}
			]
		},
		{
			name: "config",
			children: [
				{
					name: "main.config.json"
				},
				{
					name: "electron.config.json"
				}
			]
		},
		{
			name: "node_modules",
			loading: true,
			children: []
		},
		{
			name: "source",
			active: true,
			toggled: true,
			children: [
				{
					name: "data",
					children: [
						{
							name: "config.default.js"
						},
						{
							name: "electron.config.default.js"
						}
					]
				},
				{
					name: "client",
					children: [
						{
							name: "js",
							children: [
								{
									name: "index.js"
								}
							]
						},
						{ name: "style", children: [] }
					]
				},
				{
					name: "js",
					children: [
						{
							name: "index.js"
						},
						{
							name: "electron",
							children: [{ name: "index.js" }]
						}
					]
				},
				{
					name: "md",
					path: "/source/md",
					children: []
				}
			]
		},
		{
			name: "public",
			key: "indexJS",
			children: [
				{
					name: "style",
					children: [
						{
							name: "style.min.css"
						}
					]
				},
				{
					name: "js",
					children: [
						{
							name: "main.min.js"
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
