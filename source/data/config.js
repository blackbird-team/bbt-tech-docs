export default {
	host: "localhost", // prod: 185.69.154.65
	port: 2222, // prod: 80
	programTypes: [
		{
			name: "service",
			sub: [
				{
					name: "lib"
				},
				{
					name: "cli"
				}
			]
		},
		{
			name: "backend"
		},
		{
			name: "fullstack",
			sub: [
				{
					name: "standalone"
				}
			]
		},
		{
			name: "frontend"
		}
	]
};
