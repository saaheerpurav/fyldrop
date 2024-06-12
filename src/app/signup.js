import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet'
import { message, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { fs } from '../firebase';
import Papa from "papaparse";

import Header from '../components/header';
import Footer from '../components/footer';

import { useAuth } from "../Auth";
import keys from "./keys.csv"

export default function SignupScreen({ appSumo }) {
    const { signup, currentUser } = useAuth();
    const [loading, setLoading] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const [keySet, setKeySet] = useState([]);

    const getVal = (e) => {
        return e.querySelectorAll("input,textarea")[0].value;
    }

    const onFinish = async (e) => {
        e.preventDefault();
        setLoading(true);

        let inps = document.getElementById("authForm").children;
        let usedByOthers = false;
        let ascode;

        if (appSumo === true) {
            let q = query(collection(fs, 'accounts'), where('ascode', '==', getVal(inps[3])));
            let querySnapshot = await getDocs(q);
            usedByOthers = !(querySnapshot.empty);
            ascode = getVal(inps[3]);
        }
        else ascode = null;

        if (usedByOthers === true && appSumo === true) { messageApi.open({ type: "error", content: "Key already in use", style: { zIndex: 999 } }); setLoading(false); }
        else if (appSumo === true && !keySet.includes(getVal(inps[3]))) { messageApi.open({ type: "error", content: "Invalid key", style: { zIndex: 999 } }); setLoading(false); }
        else if (getVal(inps[1]) !== getVal(inps[2])) { messageApi.open({ type: "error", content: "Passwords do not match", style: { zIndex: 999 } }); setLoading(false); }
        else {
            try {
                await signup(getVal(inps[0]), getVal(inps[1]), ascode);
                messageApi.open({ type: "success", content: "Account created successfully", style: { zIndex: 999 } });
                window.location.href = '/account';
            }
            catch (error) {
                if (error.message === "Firebase: Error (auth/email-already-in-use).")
                    messageApi.open({ type: "error", content: "Email already in use", style: { zIndex: 999 } });
                else messageApi.open({ type: "error", content: "Failed to create an account: " + error.message, style: { zIndex: 999 } });

            }
            finally {
                setLoading(false);
            }
        }
    };

    useEffect(() => {
        if (appSumo === true) Papa.parse(keys, {
            download: true,
            complete: (res, file) => {
                let temp = [];
                for (let i of res.data) temp.push(i[0])
                setKeySet(temp);
            }
        });
    }, [])

    return (
        <div style={{ fontFamily: "Inter" }}>
            <Helmet>
                <title>Signup | FylDrop</title>
                <meta property="og:title" content="Signup | FylDrop" />
            </Helmet>

            {contextHolder}

            <Header isAuth={false} />

            <section className="bg-[#F4F7FF] py-14 lg:py-20 h-[100vh]">
                <h1 className="text-center mb-20 text-4xl font-bold text-primary">Upgrade Now</h1>

                <div className="container">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4">
                            <div className="max-w-[525px] mx-auto text-center bg-white rounded-lg relative overflow-hidden py-14 px-8 sm:px-12 md:px-[60px] wow fadeInUp">

                                {
                                    appSumo
                                        ? <p className="mb-10 text-[#adadad]">Use your AppSumo code to get a lifetime deal</p>
                                        : null
                                }

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

                                    <div className="mb-6">
                                        <input type="password" placeholder="Confirm Password" required
                                            className="w-full rounded-md border border-[#E9EDF4] py-3 px-5 bg-[#FCFDFE] text-base text-body-color placeholder-[#ACB6BE] outline-none
                      focus-visible:shadow-none focus:border-primary transition"/>
                                    </div>

                                    {
                                        appSumo
                                            ? <div className="mb-6">
                                                <input type="password" placeholder="AppSumo Code" required
                                                    className="w-full rounded-md border border-[#E9EDF4] py-3 px-5 bg-[#FCFDFE] text-base text-body-color placeholder-[#ACB6BE] outline-none
                      focus-visible:shadow-none focus:border-primary transition"/>
                                            </div>

                                            : null
                                    }

                                    <div className="mb-10">
                                        <button type="submit" className="w-full rounded-md border bordder-primary py-3 px-5 bg-primary text-base text-white cursor-pointer
                    hover:bg-dark transition duration-300 ease-in-out">
                                            {
                                                loading
                                                    ? <Spin indicator={<LoadingOutlined style={{ fontSize: 25, color: "white" }} spin />} />
                                                    : "Sign Up"
                                            }
                                        </button>
                                    </div>
                                </form>

                                <p className="text-base text-[#adadad]">
                                    Already have an account?&nbsp;
                                    <a href="/login" className="text-primary hover:underline">
                                        Log In
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


