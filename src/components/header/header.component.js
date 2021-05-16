import React from 'react'
import { Link } from 'react-router-dom'
import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/modernCart.svg'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import Cart from '../cart-dropdown/cart-dropdown.component'
import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'

const Header = ({ currentUser, hidden }) => {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <div className="logo-div">
                    <span className="logo-text">ModernCart</span>
                    <Logo 
                        height="43px"
                        width="90px"
                        style={{"margin-top":"10px"}}
                        className="logo">
                    </Logo>
                </div>
            </Link>
            <div className="options">
                <Link to="/shop" className="option">
                    SHOP
                </Link>
                <Link to="/contact" className="option">
                    CONTACT
                </Link>
                {
                    currentUser
                        ?
                        (
                            <div className="option"
                                onClick={() => auth.signOut()}>
                                SIGN OUT
                            </div>
                        )
                        :
                        (
                            <Link to="/signin" className="option">
                                SIGN IN
                            </Link>
                        )
                }
                <CartIcon />
            </div>
            { hidden ? (<></>) : (<Cart />) }
        </div>
    )
}

// const mapStateToProps = ({user: {currentUser}, cart: {hidden} }) => ({
//     currentUser, hidden
// })

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser, 
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)