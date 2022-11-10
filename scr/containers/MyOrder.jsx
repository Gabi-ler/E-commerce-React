import React from 'react';
import OrderItem from '@component/OrderItem';
import '@styles/MyOrder.scss';
import flechita from '@icons/flechita.svg';

const MyOrder = () => {
    return (
        <aside class="product-detail">
            <div class="title-container">
                <img src={flechita} alt="arrow" />
                <p class="title">My order</p>
            </div>
            <div className='my-order-content'>
            <OrderItem/>
                <div class="order">
                    <p>
                        <span>Total</span>
                    </p>
                    <p>$560.00</p>
                </div>
                <button class="primary-button">
                    Checkout
                </button>
            </div>
        </aside >
    );
}

export default MyOrder;
