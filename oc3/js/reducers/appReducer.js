
export const AppActionTypes = {
    APP_STARTED: 'app_started'
}


export default (state, action) => {
	switch (action.type) {
		case AppActionTypes.APP_STARTED:
			return {
				...state,
				appStarted: true
			}
		default:
			return state

	}
}