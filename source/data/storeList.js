import StructureFolding from "./structureFolding";

const StoreList = [
	{
		name: "viewport",
		options: {
			initState: { viewport: "/" }
		}
	},
	{
		name: "programStructureTab",
		options: {
			initState: { tab: "frontend", tree: StructureFolding }
		}
	}
];

export default StoreList;
