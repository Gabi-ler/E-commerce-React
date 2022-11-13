import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '../context/AppContext';
import '@styles/MyOrder.scss';
import flechita from '@icons/flechita.svg';

const MyOrder = () => {
    const { state } = useContext(AppContext)

    const sumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = state.cart.reduce(reducer, 0)
        return sum
    }
    return (
        <aside class="product-detail">
            <div class="title-container">
                <img src={flechita} alt="arrow" />
                <p class="title">My order</p>
            </div>
            <div className='my-order-content'>
            {state.cart.map(item => 
            <OrderItem producto={item} key={`orderItems-${item.id}`}/>
            )}
                <div class="order">
                    <p>
                        <span>Total</span>
                    </p>
                    <p>${sumTotal()}</p>
                </div>
                <button class="primary-button">
                    Checkout
                </button>
            </div>
        </aside >
    );
}

export default MyOrder;
