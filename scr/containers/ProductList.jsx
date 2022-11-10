import React from 'react';
import ProductItem from '@component/ProductItem.jsx'
import '@styles/ProductList.scss'

const ProductList = () => {
    return (
        <div>
            <section className='main-container'>
                <div className='ProductList'>
                    <ProductItem/>
                </div>
            </section>
        </div>
    );
}

export default ProductList;
