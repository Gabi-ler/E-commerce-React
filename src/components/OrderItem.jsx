import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '@styles/OrderItem.scss'

import close from '@icons/icon_close.png';

const OrderItem = ({producto}) => {
    const { removeFromCart } = useContext(AppContext)

    const handleRemove = prodItem => {
        removeFromCart(prodItem)
    }
    return (
        <div>
            <div class="shopping-cart">
                <figure>
                    <img src={producto.images[0]} alt={producto.title} />
                </figure>
                <p>{producto.title}</p>
                <p>${producto.price}</p>
                <img src={close} alt="close" onClick={() => handleRemove(producto)} />
            </div>
        </div>
    );
}

export default OrderItem;
