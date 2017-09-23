import moment from 'moment'
import * as actionTypes from '../constants/actionTypes';

export function showEventDetailsScreen() {
  return {
    type: actionTypes.SHOW_EVENT_DETAILS_MODAL
  }
}

export function closeEventDetailsScreen() {
  return {
    type: actionTypes.CLOSE_EVENT_DETAILS_MODAL
  }
}

export function getEventsOnDays(events) {
  return (dispatch, getState) => {
    const currEvents = events || getState().api.events
    let eventsOnDays = {}
    currEvents.forEach((event) => {
      const startDate = moment(event.start_date)
      const endDate = moment(event.end_date)
      for(let currDate = startDate; currDate.diff(endDate) <= 0; currDate.add(1, 'days')){
        const formattedCurrDate = currDate.format('YYYY-MM-DD')
        if(!eventsOnDays[formattedCurrDate]) {
          eventsOnDays[formattedCurrDate] = []
        }
        eventsOnDays[formattedCurrDate].push({
          title: event.title || event.description,
          description: event.description,
        })
      }
    });
    dispatch(getEventsOnDaysAction(eventsOnDays))
  }
}

function getEventsOnDaysAction(eventsOnDays) {
  return {
    type: actionTypes.EVENTS_ON_DAYS_CONVERTED,
    eventsOnDays
  }
}