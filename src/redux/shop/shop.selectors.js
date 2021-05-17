import {createSelector} from 'reselect'

const selectShop = state => state.shop;

export const getShopCollecions = createSelector(
    [selectShop],
    (shop) => shop.collections ? Object.values(shop.collections) : []
)
