import React, { useRef } from "react";
import "@styles/Login.scss";
import logo from '@logos/logo_yard_sale.svg';

const Login = () => {
    const form = useRef(null)

    const handleSubmit= (event) => {
        event.preventDefault()
        const formData = new FormData(form.current)
        const data = {
            username: formData.get('email'),
            password: formData.get('password')
        }
        console.log(data);
    }

    return (
        <div className="login">
            <div className="form-container">
                <img src={logo} alt="logo" className="logo" />

                <form action="/" className="form" ref={form}>
                    <label for="email" className="label">Direccion de coreo electronico</label>
                    <input type="text" name="email" placeholder="juan.perez@example.com" className="input input-email" />

                    <label for="password" className="label">Contraseña</label>
                    <input type="password" name="password" placeholder="*********" className="input input-password" />

                    <button className="primary-button login-button" onClick={handleSubmit}>
                    Iniciar sesión
                    </button>
                    <a href="/">Olvide mi constraseña</a>
                </form>

                <button className="secondary-button signup-button">
                Registrarse
                </button>
            </div>
        </div>
    );
};

export default Login;
