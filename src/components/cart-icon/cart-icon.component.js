import React from 'react'
import { connect } from 'react-redux'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import './cart-icon.styles.scss'


const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapStateToProps = ({cart: {cartItems}}) => ({
    itemCount: cartItems.reduce((accumulatedQuantity, item) => accumulatedQuantity + item.quantity, 0)
})

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => {
        dispatch(toggleCartHidden())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)