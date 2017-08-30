import * as ActionTypes from '../constants/ActionTypes';

const initAppState = {
	showWelcomeModal: true
}

export default (state = initAppState, action) => {
	switch (action.type) {
		case ActionTypes.EVENTS_FETCHED:
			return {
				...state,
				showWelcomeModal: false
			}
		default:
			return state
	}
}