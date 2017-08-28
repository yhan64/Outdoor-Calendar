
export const ApiActionTypes = {
	EVENTS_FETCHED: 'events_fechted'
}


export default (state, action) => {
    switch (action.type) {
		case ApiActionTypes.EVENTS_FETCHED:
			console.log('------------->API reducer------------>')
			console.log('-------------> EVENTS fetched ----------->')
			return {
				...state,
				events: action.events
			}
		default:
			return state

	}
}