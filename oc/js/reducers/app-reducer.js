import * as actionTypes from 'oc/js/constants/action-types';
import * as modalNames from 'oc/js//constants/modal-names';

const initAppState = {
	eventsOnDays: {},
	selectedEventDetails: {}
}

export default (state = initAppState, action) => {
	switch (action.type) {
		case actionTypes.EVENTS_ON_DAYS_CONVERTED:
			return {
				...state,
				eventsOnDays: action.eventsOnDays
			}
		case actionTypes.SHOW_EVENT_DETAILS_MODAL:
			return {
				...state,
				selectedEventDetails: action.eventDetails
			}
		default:
			return state
	}
}