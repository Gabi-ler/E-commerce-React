import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@containers/Layout';
import Login from '@pages/Login';
import RecoveryPass from '@pages/RecoveryPass'
import Home from '@pages/home';
import NotFound from '@pages/NotFound';
import SendEmail from '@pages/SendEmail';
import CheckOut from '@pages/CheckOut'
import CreateAccount from '@pages/CreateAccount'
import MyAccount from '@pages/MyAccount'
import NewPassword from '@pages/NewPassword'
import Orders from '@pages/Orders'
import AppContext from '../context/AppContext';
import UseInitialState from '../hooks/useInitialState';
import '@styles/global.css';

const App = () => {
    const initialState = UseInitialState()
    return (
        <AppContext.Provider value={ initialState }>
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/recovery-pass" element={<RecoveryPass />} />
                    <Route path="/send-email" element={<SendEmail />} />
                    <Route path="/check-out" element={<CheckOut />} />
                    <Route path="/create-account" element={<CreateAccount />} />
                    <Route path="/my-account" element={<MyAccount />} />
                    <Route path="/new-password" element={<NewPassword />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
        </AppContext.Provider>
    )
}

export default App