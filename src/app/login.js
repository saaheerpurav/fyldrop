import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet'
import { message, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import Header from '../components/header';
import Footer from '../components/footer';

import { useAuth } from "../Auth";

export default function LoginScreen() {
    const { login, currentUser } = useAuth();
    const [loading, setLoading] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();

    const getVal = (e) => {
        return e.querySelectorAll("input,textarea")[0].value;
    }

    const onFinish = async (e) => {
        e.preventDefault();
        let inps = document.getElementById("authForm").children;

        try {
            setLoading(true);
            await login(getVal(inps[0]), getVal(inps[1]));
            messageApi.open({ type: "success", content: "Logged in successfully", style: { zIndex: 999 } });

            window.location.href = "/account";

        } catch (error) {
            messageApi.open({ type: "error", content: "Failed to log in: " + error.message, style: { zIndex: 999 } });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (currentUser !== null) window.location.href = "/account";
    }, [currentUser])

    return (
        <div style={{ fontFamily: "Inter" }}>
            <Helmet>
                <title>Login | FylDrop</title>
                <meta property="og:title" content="Login | FylDrop" />
            </Helmet>


            {contextHolder}

            <Header isAuth={false} />

            <section className="bg-[#F4F7FF] py-14 lg:py-20 h-[100vh]">
                <h1 className="text-center mb-20 text-4xl font-bold text-primary">Login</h1>

                <div className="container">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4">
                            <div className="max-w-[525px] mx-auto text-center bg-white rounded-lg relative overflow-hidden py-14 px-8 sm:px-12 md:px-[60px] wow fadeInUp">

                                <form onSubmit={onFinish} id="authForm">
                                    <div className="mb-6">
                                        <input type="email" placeholder="Email" required
                                            className="w-full rounded-md border border-[#E9EDF4] py-3 px-5 bg-[#FCFDFE] text-base text-body-color placeholder-[#ACB6BE] outline-none
                      focus-visible:shadow-none focus:border-primary transition"/>
                                    </div>

                                    <div className="mb-6">
                                        <input type="password" placeholder="Password" required
                                            className="w-full rounded-md border border-[#E9EDF4] py-3 px-5 bg-[#FCFDFE] text-base text-body-color placeholder-[#ACB6BE] outline-none
                      focus-visible:shadow-none focus:border-primary transition"/>
                                    </div>

                                    <div className="mb-10">
                                        <button type="submit" className="w-full rounded-md border bordder-primary py-3 px-5 bg-primary text-base text-white cursor-pointer
                    hover:bg-dark transition duration-300 ease-in-out">
                                            {
                                                loading
                                                    ? <Spin indicator={<LoadingOutlined style={{ fontSize: 25, color: "white" }} spin />} />
                                                    : "Login"
                                            }
                                        </button>
                                    </div>
                                </form>

                                <p className="text-base text-[#adadad]">
                                    Don't have an account?&nbsp;
                                    <a href="/signup" className="text-primary hover:underline">
                                        Sign Up
                                    </a>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}


