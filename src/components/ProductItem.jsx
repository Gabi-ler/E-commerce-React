import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import AppContext from '../context/AppContext';

import agregarCard from '@icons/bt_add_to_cart.svg'

const ProductItem = ({product}) => {
    const { addToCart } = useContext(AppContext)

    const handClick = productoItem => {
        addToCart(productoItem)
    }
    return (
        <div>
            <div className="product-card">
                <img src={product.images[0]} alt={product.title}/>
                <div className="product-info">
                    <div>
                        <p>${product.price}</p>
                        <p>{product.title}</p>
                    </div>
                    <figure onClick={() => handClick(product)}>
                        <img src={agregarCard} alt="" />
                    </figure>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
