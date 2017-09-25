import moment from 'moment'
import { Navigation } from 'react-native-navigation'
import * as actionTypes from '../constants/action-types'
import * as screenNames from 'oc/js/constants/screen-names'

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

export function showEventDetailsOn(date, index) {
  return (dispatch, getState) => {
    const details = getEventDetailsOn(date, index, getState)
    dispatch(showEventDetailsAction(details))
    Navigation.showModal({
      screen: screenNames.EVENT_DETAILS,
      
    })
  }  
}

function getEventDetailsOn(date, index, getState) {
  const details = getState().app.eventsOnDays[date]
  if(details && details.length > index) {
    return details[index]
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
        const index = eventsOnDays[formattedCurrDate].length
        eventsOnDays[formattedCurrDate].push({
          ...event,
          title: event.title || event.description,
          date: formattedCurrDate,
          index: index
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