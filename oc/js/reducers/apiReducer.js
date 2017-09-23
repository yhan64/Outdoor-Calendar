import * as actionTypes from 'oc/js/constants/actionTypes';

const initApiState = {
	events: [],
	eventsFetched: false,
	isFetchingEvents: false
}

export default (state = initApiState, action) => {
    switch (action.type) {
		case actionTypes.EVENTS_FETCHED:
			return {
				...state,
				events: action.events,
				eventsFetched: true,
				isFetchingEvents: false
			}
		case actionTypes.FETCHING_EVENTS:
			return {
				...state,
				isFetchingEvents: true
			}
		case actionTypes.FETCHING_EVENTS_FAILED:
			return {
				...state,
				isFetchingEvents: false
			}
		default:
			return state

	}
}