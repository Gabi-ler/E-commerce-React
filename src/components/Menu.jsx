import React from 'react';
import '@styles/Menu.scss'

const Menu = () => {
    return (
        <div>
            <div className="desktop-menu">
                <ul>
                    <li>
                        <a href="/" className="title">Mis pedidos</a>
                    </li>
                    <li>
                        <a href="/">Mi cuenta</a>
                    </li>
                    <li>
                        <a href="/">Cerrar sesión</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Menu;
