import { ShopActionTypes } from './shop.types'

export const getShopList = shoplist => ({
    type: ShopActionTypes.GET_ITEMS,
    payload: shoplist
})