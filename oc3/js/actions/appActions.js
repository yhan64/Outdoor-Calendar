import moment from 'moment'
import * as ActionTypes from '../constants/ActionTypes';

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
    type: ActionTypes.EVENTS_ON_DAYS_CONVERTED,
    eventsOnDays
  }
}