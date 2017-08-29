import * as ActionTypes from '../constants/ActionTypes';

export default (state, action) => {
    switch (action.type) {
		case ActionTypes.EVENTS_FETCHED:
			return {
				...state,
				events: action.events
			}
		default:
			return state

	}
}