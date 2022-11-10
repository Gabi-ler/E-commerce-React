import React, { useState } from 'react';
import '@styles/ProductItem.scss';

import agregarCard from '@icons/bt_add_to_cart.svg'

const ProductItem = () => {
    const [cart, setCart] = useState([])

    const handClick = () => {
        setCart([])
    }
    return (
        <div>
            <div className="product-card">
                <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                <div className="product-info">
                    <div>
                        <p>$120,00</p>
                        <p>Bike</p>
                    </div>
                    <figure onClick={handClick}>
                        <img src={agregarCard} alt="" />
                    </figure>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;