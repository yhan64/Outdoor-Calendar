import { Platform } from 'react-native'
import * as actionTypes from '../constants/action-types'
import { getEventsOnDays } from './app-actions'

const baseUrl = Platform.OS === 'ios' ? 'http://localhost:3030' : 'http://192.168.xxx.xxx:3030'  //fill in your local ip address to run on android

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
      const events = Array.from(await response.json())
      dispatch(eventsFetchedAction(events))
      dispatch(getEventsOnDays(events))
    } catch (e) {
      dispatch(fetchingEventsFailedAction())
      console.error(e);
    }
    
  }
}

function fetchingEventsAction() {
  return {
    type: actionTypes.FETCHING_EVENTS
  }
}

function eventsFetchedAction(events) {
  return {
    type: actionTypes.EVENTS_FETCHED,
    events: events
  }
}

function fetchingEventsFailedAction() {
  return {
    type: actionTypes.FETCHING_EVENTS_FAILED
  }
}