import * as ActionTypes from '../constants/ActionTypes';
import * as ModalNames from '../constants/ModalNames';

const initAppState = {
	eventsOnDays: {},
	modalInfo: {
		showModal: true,
		modalName: ModalNames.WELCOME_MODAL
	}
}

export default (state = initAppState, action) => {
	switch (action.type) {
		case ActionTypes.EVENTS_ON_DAYS_CONVERTED:
			return {
				...state,
				eventsOnDays: action.eventsOnDays
			}
		default:
			return state
	}
}