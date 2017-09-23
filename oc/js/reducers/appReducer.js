import * as actionTypes from 'oc/js/constants/actionTypes';
import * as modalNames from 'oc/js//constants/modalNames';

const initAppState = {
	eventsOnDays: {},
	modalInfo: {
		showModal: false,
		modalName: ''
	}
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
				modalInfo: {
					showModal: true,
					modalName: modalNames.EVENT_DETAILS
				}
			}
		default:
			return state
	}
}