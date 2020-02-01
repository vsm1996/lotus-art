import {EventActionTypes} from './events.types'

export const getEvents = events => ({
    type: EventActionTypes.GET_EVENTS,
    payload: events
})