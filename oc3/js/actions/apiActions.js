import * as ActionTypes from '../constants/ActionTypes';

const baseUrl = 'http://localhost:3030';
const routes = {
  ALL_EVENTS: '/getEvents'
}

export const fetchAllEvents = () => {
  return async (dispatch) => {
    dispatch(fetchingEventsAction());
    try {
      const response = await fetch(baseUrl + routes.ALL_EVENTS, {
        method: 'get',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      
      const events = await response.json();
      dispatch(eventsFetchedAction(events));
    } catch (e) {
      dispatch(fetchingEventsFailedAction());
      console.error(e);
    }
  }
}

function fetchingEventsAction() {
  return {
    type: ActionTypes.FETCHING_EVENTS
  }
}

function eventsFetchedAction(events) {
  return {
    type: ActionTypes.EVENTS_FETCHED,
    events: events
  }
}

function fetchingEventsFailedAction() {
  return {
    type: ActionTypes.FETCHING_EVENTS_FAILED
  }
}