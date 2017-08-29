import * as ActionTypes from '../constants/ActionTypes';

const initAppState = {
	initialized: false
}

export default (state, action) => {
	switch (action.type) {
		case ActionTypes.APP_STARTED:
			return {
				...state,
				
			}
		default:
			return state

	}
}