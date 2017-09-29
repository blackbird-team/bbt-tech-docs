import StructureFolding from "./structureFolding/index";

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
			initState: { tab: "frontend", tree: StructureFolding.frontend }
		}
	}
];

export default StoreList;
