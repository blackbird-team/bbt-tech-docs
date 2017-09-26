import { StoreController } from "redux-store-controller";
import history from "~/stores/history";
import ViewController from "~/views/viewController";
import ScrollController from "~/controllers/scrollController";

import StoreList from "./storeList";
import SubscriptionMap from "./subscriptionMap";

const LoaderList = [
	{
		step: 0,
		parts: [
			{
				name: "storeList",
				type: "data",
				controller: StoreList
			},
			{
				name: "subscriptionMap",
				type: "data",
				controller: SubscriptionMap
			},
			{
				name: "history",
				type: "data",
				controller: history
			},
			{
				name: "stores",
				type: "class",
				controller: StoreController,
				params: ["storeList", "subscriptionMap"]
			}
		]
	},
	{
		step: 1,
		parts: [
			{
				name: "view",
				type: "class",
				controller: ViewController,
				params: ["stores", "history"]
			},
			{
				name: "scrollController",
				type: "class",
				controller: ScrollController,
				params: ["history"]
			}
		]
	}
];

export default LoaderList;