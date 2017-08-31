import * as ActionTypes from '../constants/ActionTypes';
import * as ModalNames from '../constants/ModalNames';

const initAppState = {
	modalInfo: {
		showModal: true,
		modalName: ModalNames.WELCOME_MODAL
	}
}

export default (state = initAppState, action) => {
	switch (action.type) {
		case ActionTypes.EVENTS_FETCHED:
			return {
				...state,
				showModal: false
			}
		default:
			return state
	}
}