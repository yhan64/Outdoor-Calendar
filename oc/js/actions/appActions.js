import moment from 'moment'
import { Navigation } from 'react-native-navigation'
import * as actionTypes from '../constants/actionTypes'
import * as screenNames from 'oc/js/constants/screenNames'

export function dismissModal() {
  return (dispatch) => {
    Navigation.dismissModal()
    dispatch(dismissModalAction())
  }
}

function dismissModalAction() {
  return {
    type: actionTypes.DISMISS_MODAL
  }
}

export function showEventDetailsOn(date) {
  return (dispatch, getState) => {
    const details = getEventDetailsOn(date, getState)
    dispatch(showEventDetailsAction(details))
    Navigation.showModal({
      screen: screenNames.EVENT_DETAILS,
      
    })
  }  
}

function getEventDetailsOn(date, getState) {
  const details = getState().app.eventsOnDays[date]
  if(details && details.length > 0) {
    return details[0]
  }
  return {currDate: date, description: 'No Event on the day'}
}

function showEventDetailsAction(eventDetails) {
  return {
    type: actionTypes.SHOW_EVENT_DETAILS_MODAL,
    eventDetails
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
          ...event,
          title: event.title || event.description,
          date: formattedCurrDate
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