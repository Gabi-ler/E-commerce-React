import React from 'react';
import ProductInfo from '../component/ProductInfo';
import '@styles/ProductDetails.scss'

import close from '@icons/icon_close.png'

const ProductDetail = () => {
    return (
        <div>
            <aside class="product-detail">
                <div class="product-detail-close">
                    <img src={close} alt="close" />
                </div>
                <ProductInfo/>
            </aside>
        </div>
    );
}

export default ProductDetail;
