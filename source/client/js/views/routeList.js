import ListComposition from "./components/list/listComposition";
// import ArticleComposition from "./components/common/articleComposition";

const RouteList = {
	"/": {
		child: ListComposition,
		type: "common"
	},
	"default": {
		child: ListComposition,
		type: "common"
	}
};

export default RouteList;