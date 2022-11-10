import React from 'react';
import '@styles/Order.scss'

import flecha from '@icon/flechita.svg'

const Order = () => {
    return (
        <div>
            <div className="Order">
                <p>
                    <span>03.25.21</span>
                    <span>6 articles</span>
                </p>
                <p>$560.00</p>
                <img src={flecha} alt="arrow" />
            </div>
        </div>
    );
}

export default Order;
