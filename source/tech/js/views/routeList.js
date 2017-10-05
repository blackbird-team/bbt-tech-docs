import ListComposition from "./components/list/listComposition.jsx";
import ArticleComposition from "./components/articles/articleComposition.jsx";

const RouteList = {
	"/": {
		child: ListComposition,
		type: "common"
	},
	"/home": {
		child: ListComposition,
		type: "common"
	},
	"default": {
		child: ArticleComposition,
		type: "common"
	}
};

export default RouteList;