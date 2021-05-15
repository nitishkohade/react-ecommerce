import React from 'react'
import { connect } from 'react-redux'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import './checkout.styles.scss'

const CheckoutPage = ({cartItems, total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(item => (<CheckoutItem key={item.id} cartItem={item} />))
        }
        <div className="total">
            <span>TOTAL: ${total}</span>
            </div>
    </div>
)

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems,
    total: cartItems.reduce((accumulatedPrice, item) => accumulatedPrice + item.price*item.quantity, 0)
})

const mapDispatchToProps = (dispatch) => ({
    removeCartItem: (id) => {}
})


export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage)