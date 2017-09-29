const SubscriptionMap = [
	{
		component: "viewport",
		storesRules: [
			{
				store: "viewport"
			}
		]
	},
	{
		class: "viewport",
		storesRules: [
			{
				store: "viewport"
			}
		]
	},
	{
		component: "programStructureTab",
		storesRules: [
			{
				store: "programStructureTab",
				fileds: ["tab"]
			},
			{
				store: "viewport"
			}
		]
	},
	{
		component: "programStructureView",
		storesRules: [
			{
				store: "programStructureTab",
				fileds: ["tree", "tab"]
			}
		]
	}
]

export default SubscriptionMap;