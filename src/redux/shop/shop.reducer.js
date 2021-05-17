import SHOP_DATA from "./shop.data";
import ShopActionsTypes from "./shop.types";


const INITIAL_STATE = {
    collections: null
}

const ShopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ShopActionsTypes.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            }
        default: 
             return state
    }
}

export default ShopReducer;