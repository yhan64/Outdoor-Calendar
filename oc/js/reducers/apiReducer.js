import * as ActionTypes from 'oc3/js/constants/ActionTypes';

const initApiState = {
	events: [],
	eventsFetched: false,
	isFetchingEvents: false
}

export default (state = initApiState, action) => {
    switch (action.type) {
		case ActionTypes.EVENTS_FETCHED:
			return {
				...state,
				events: action.events,
				eventsFetched: true,
				isFetchingEvents: false
			}
		case ActionTypes.FETCHING_EVENTS:
			return {
				...state,
				isFetchingEvents: true
			}
		case ActionTypes.FETCHING_EVENTS_FAILED:
			return {
				...state,
				isFetchingEvents: false
			}
		default:
			return state

	}
}