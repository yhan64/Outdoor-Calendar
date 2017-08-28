import { ApiActionTypes } from '../reducers/apiReducer';

const baseUrl = 'http://localhost:3030';
const routes = {
  ALL_EVENTS: '/getEvents'
}

export const testActionCreator = dispatch => {
  return async () => dispatch(eventsFetchedAction('events'))
}

export const fetchAllEvents = async (dispatch) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + routes.ALL_EVENTS, {
        method: 'get',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      
      const events = await response.json();
      dispatch(eventsFetchedAction());
      console.log(events);
  
    } catch (e) {
      console.error(e);
    }
  }
}

// export async function fetchAllEvents(dispatch) {
//   try {
//     const response = await fetch(baseUrl + routes.ALL_EVENTS, {
//       method: 'get',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       }
//     });
    
//     const events = await response.json();
//     dispatch(eventsFetchedAction(events));
//     console.log(events);

//   } catch (e) {
//     console.error(e);
//   }
// }

export function eventsFetchedAction(events) {
  return {
    type: ApiActionTypes.EVENTS_FETCHED,
    events: events
  }
}