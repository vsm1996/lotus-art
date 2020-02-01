import { combineReducers } from 'redux'

import cartReducer from './cart/cart.reducer'
import eventsReducer from './events/events.reducer';
import shopReducer from './shop/shop.reducer'

export default combineReducers({
    cart: cartReducer,
    events: eventsReducer,
    shop: shopReducer
})