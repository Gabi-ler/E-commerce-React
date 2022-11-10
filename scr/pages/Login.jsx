import React from "react";
import "@styles/Login.scss";

import logo from '@logos/logo_yard_sale.svg';

const Login = () => {
    return (
        <div className="login">
            <div className="form-container">
                <img src={logo} alt="logo" className="logo" />

                <form action="/" className="form">
                    <label for="email" className="label">Direccion de coreo electronico</label>
                    <input type="text" id="email" placeholder="juan.perez@example.com" className="input input-email" />

                    <label for="password" className="label">Constraseña</label>
                    <input type="password" id="password" placeholder="*********" className="input input-password" />

                    <input type="submit" value="Log in" className="primary-button login-button" />
                    <a href="/">Olvide mi constraseña</a>
                </form>

                <button className="secondary-button signup-button">Registrarse</button>
            </div>
        </div>
    );
};

export default Login;
