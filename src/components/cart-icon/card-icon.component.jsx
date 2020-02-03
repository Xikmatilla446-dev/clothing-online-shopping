import React from 'react';
import { connect} from "react-redux";
import { createStructuredSelector } from "reselect";


import { toggleCartHidden } from '../../redux/cart/cart-actions';
import { secectorCartItemsCount } from "../../redux/cart/cart.selectors";
import { ReactComponent as ShoppingIcon } from "../../assets/104 shopping-bag.svg";
import './cart-icon.styles.scss';

const CardIcon = ({ toggleCartHidden, itemCount }) => (

    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
);


const mapStateToProps = createStructuredSelector({

    itemCount: secectorCartItemsCount

});

const mapDispatchToProps = dispatch => ({

    toggleCartHidden: () => dispatch(toggleCartHidden())
});


export default connect(mapStateToProps, mapDispatchToProps)(CardIcon);