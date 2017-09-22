import * as ActionTypes from 'oc3/js/constants/ActionTypes';
import * as ModalNames from 'oc3/js//constants/ModalNames';

const initAppState = {
	eventsOnDays: {},
	modalInfo: {
		showModal: false,
		modalName: ''
	}
}

export default (state = initAppState, action) => {
	switch (action.type) {
		case ActionTypes.EVENTS_ON_DAYS_CONVERTED:
			return {
				...state,
				eventsOnDays: action.eventsOnDays
			}
		case ActionTypes.SHOW_EVENT_DETAILS_MODAL:
			return {
				...state,
				modalInfo: {
					showModal: true,
					modalName: ModalNames.EVENT_DETAILS
				}
			}
		default:
			return state
	}
}