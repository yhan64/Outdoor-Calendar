import * as ActionTypes from '../constants/ActionTypes';

export default (state, action) => {
	switch (action.type) {
		case ActionTypes.APP_STARTED:
			return {
				...state,
				appStarted: true
			}
		default:
			return state

	}
}