import React from 'react';
import '@styles/RecoveryPass.scss'

import logo from '@logos/logo_yard_sale.svg'

const RecoveryPass = () => {
    return (
        <div>
            <div className="login">
                <div className="form-container">
                    <img src={logo} alt="logo" className="logo" />

                    <h1 className="title">Recuperar contraseña</h1>
                    <p className="subtitle">Consulte su bandeja de entrada para saber cómo restablecer la contraseña.</p>

                    <form action="/" className="form">
                        <label htmlFor="email" className="label">Email address</label>
                        <input type="text" id="email" className="input input-email" />
                        <input type="submit" value="Confirm" className="primary-button login-button" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RecoveryPass;
