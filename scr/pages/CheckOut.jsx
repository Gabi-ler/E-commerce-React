import React from 'react';
import OrderItem from '@component/OrderItem';
import '@styles/CheckOut.scss'

const CheckOut = () => {
    return (
        <div className="my-order">
            <div className="my-order-container">
                <h1 className="title">My order</h1>
                <div className="my-order-content">
                    <div className="order">
                        <p>
                            <span>03.25.21</span>
                            <span>6 articles</span>
                        </p>
                        <p>$560.00</p>
                    </div>
                </div>
                <OrderItem/>
            </div>
        </div>
    );
}

export default CheckOut;


/*<div classNameName="login">
    <div classNameName="form-container">
        <img src="./logos/logo_yard_sale.svg" alt="logo" classNameName="logo" />

        <form action="/" classNameName="form">
            <label for="email" classNameName="label">Email address</label>
            <input type="text" id="email" placeholder="platzi@example.cm" classNameName="input input-email" />

            <label for="password" classNameName="label">Password</label>
            <input type="password" id="password" placeholder="*********" classNameName="input input-password" />

            <input type="submit" value="Log in" classNameName="primary-button login-button" />
            <a href="/">Forgot my password</a>
        </form>

        <button classNameName="secondary-button signup-button">Sign up</button>
    </div>
</div>*/