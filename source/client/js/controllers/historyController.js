import { ControllerStateStore } from "redux-store-controller";

class HistoryController extends ControllerStateStore {
	constructor(options) {
		HistoryController.basic(options);
		super(options);
		this.history = options.history;
	}

	stateDidUpdate() {
		this.history.push(`${this.state.viewport}`);
	}

	static basic(options) {
		const path = options.history.location.pathname;

		options.stores.viewport.set({
			viewport: `/${path}`
		});
	}
}

export default HistoryController;
