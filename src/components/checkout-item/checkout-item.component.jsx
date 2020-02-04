import React from 'react';
import { ReactComponent as Remove} from "../../assets/remove.svg";
import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem: {name, price, imageUrl, quantity}}) => (


    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item"/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">{quantity}</span>
        <span className="price">{price}</span>
        <div className="remove-button">
            <Remove className="remove" />
        </div>
    </div>
);

export default CheckoutItem;