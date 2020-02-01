import { combineReducers } from 'redux'

import shopReducer from './shop/shop.reducer'
import eventsReducer from './events/events.reducer';

export default combineReducers({
    shop: shopReducer,
    events: eventsReducer
})