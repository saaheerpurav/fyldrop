import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import PayPalCheckout from './checkout';

import Header from '../components/header';
import Footer from '../components/footer';

//LIVE CREDENTIALS
const initialOptions = {
    "client-id": process.env.REACT_APP_PAYPAL_LIVE_KEY,
    vault: true,
    intent: "subscription"
};

export default function Billing() {
    useEffect(() => {
        let authToken = localStorage.getItem('auth_token');
        if (authToken === null) window.location.href = '/login';

    }, []);

    return (
        <div>
            <Helmet>
                <title>Billing | Dashify</title>
                <meta property="og:title" content="Billing | Dashify" />
            </Helmet>

            <Header isAuth={true} />

            <div className="container pt-20 lg:pt-[120px] mb-20 h-[100vh]">
                <h2 className="font-bold text-3xl sm:text-4xl md:text-[42px] text-dark mt-5 mb-10 text-center">Billing</h2>

                <PayPalScriptProvider options={initialOptions}>
                    <PayPalCheckout />
                </PayPalScriptProvider>
            </div>

            <Footer />
        </div>
    )
}

