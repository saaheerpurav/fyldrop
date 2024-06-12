import React, { useState, useEffect } from 'react';
import { query, collection, where, getDocs } from 'firebase/firestore';
import { ref, set, increment } from "firebase/database";
import { useAuth } from '../Auth';
import { fs, db } from "../firebase"
import { message, Spin } from 'antd';

import Header from '../components/header';
import Footer from '../components/footer';

export default function Dashboard() {
    const { currentUser, logout } = useAuth();
    const [tier, setTier] = useState(null);
    const [appsumoCode, setAppsumoCode] = useState(null);


    useEffect(() => {
        if (localStorage.getItem("auth_token") === null) window.location.href = "/login"
    }, [])

    useEffect(() => {
        const fetchUserData = async () => {
            let q = query(collection(fs, "accounts"), where("userId", "==", currentUser.uid));
            let querySnapshot = await getDocs(q);

            querySnapshot.forEach((docSnap) => {
                let d = docSnap.data();
                if (d.ascode !== undefined) setAppsumoCode(d.ascode);
                setTier(d.tier);
            })
        };

        if (currentUser !== null) fetchUserData();
    }, [currentUser]);

    const handleLogout = async () => {
        try {
            await logout();
            message.success("Logged out successfully");
            window.location.href = "/";
        } catch (error) {
            message.error("Failed to log out: " + error.message);
        }
    };

    const downloadFile = async (platform) => {
        await set(ref(db, `downloads/${platform}`), increment(1));
    }

    return (
        <div>
            <Header isAuth={true} />

            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                    <h1 className="text-2xl font-semibold mb-4">Account</h1>
                    {
                        currentUser && tier
                            ? (
                                <div style={{ textAlign: "center" }}>
                                    <div style={{ textAlign: "left" }}>
                                        <p className="mb-2"><strong>Email:</strong> {currentUser.email}</p>

                                        {
                                            appsumoCode !== null
                                                ? <p className="mb-4"><strong>AppSumo Code:</strong> {appsumoCode}</p>
                                                : null
                                        }

                                        <p className="mb-4"><strong>Plan:</strong> {tier[0].toUpperCase() + tier.substr(1)}</p>
                                    </div>

                                    {
                                        tier === "free"
                                            ? <button onClick={() => { window.location.href = "/billing" }} className="bg-[#0074F0] text-white font-bold py-2 px-10 rounded mb-4">Upgrade to Pro</button>
                                            : null
                                    }

                                    <div className="flex flex-col text-black">
                                        <a href="https://github.com/saaheerpurav/fyldrop/releases/download/v1.0.0/FylDrop.Setup.1.0.0.exe" onClick={() => { downloadFile("windows") }}
                                            className="mb-5 font-bold py-2 px-4 rounded border flex items-center flex-col">
                                            <svg viewBox="0 0 1024 1024" className="home-icon18 mb-5">
                                                <path d="M0.35 512l-0.35-312.074 384-52.144v364.218zM448 138.482l511.872-74.482v448h-511.872zM959.998 576l-0.126 448-511.872-72.016v-375.984zM384 943.836l-383.688-52.594-0.020-315.242h383.708z"></path>
                                            </svg>
                                            Download for Windows
                                        </a>

                                        <a href="https://github.com/saaheerpurav/fyldrop/releases/download/v1.0.0/FylDrop-1.0.0.dmg" onClick={() => { downloadFile("macos") }}
                                            className="mb-5 font-bold py-2 px-4 rounded border flex items-center flex-col">
                                            <svg viewBox="0 0 1024 1024" className="home-icon20 mb-5">
                                                <path d="M791.498 544.092c-1.294-129.682 105.758-191.876 110.542-194.966-60.152-88.020-153.85-100.078-187.242-101.472-79.742-8.074-155.596 46.948-196.066 46.948-40.368 0-102.818-45.754-168.952-44.552-86.916 1.292-167.058 50.538-211.812 128.38-90.304 156.698-23.126 388.84 64.89 515.926 43.008 62.204 94.292 132.076 161.626 129.58 64.842-2.588 89.362-41.958 167.756-41.958s100.428 41.958 169.050 40.67c69.774-1.296 113.982-63.398 156.692-125.796 49.39-72.168 69.726-142.038 70.924-145.626-1.548-0.706-136.060-52.236-137.408-207.134zM662.562 163.522c35.738-43.358 59.86-103.512 53.28-163.522-51.478 2.096-113.878 34.29-150.81 77.55-33.142 38.376-62.148 99.626-54.374 158.436 57.466 4.484 116.128-29.204 151.904-72.464z"></path>
                                            </svg>
                                            Download for MacOS
                                        </a>

                                        <a href="https://github.com/saaheerpurav/fyldrop/releases/download/v1.0.0/FylDrop-1.0.0.AppImage" onClick={() => { downloadFile("linux") }}
                                            className="mb-5 font-bold py-2 px-4 rounded border flex items-center flex-col">
                                            <svg viewBox="0 0 1024 1024" className="home-icon22 mb-5">
                                                <path d="M567.656 736.916c-81.944 38.118-158.158 37.716-209.34 34.020-61.052-4.41-110.158-21.124-131.742-35.732-13.3-9.006-31.384-5.522-40.39 7.782-9.004 13.302-5.52 31.386 7.782 40.39 34.698 23.486 96.068 40.954 160.162 45.58 10.866 0.784 22.798 1.278 35.646 1.278 55.782 0 126.626-5.316 202.42-40.57 14.564-6.778 20.878-24.074 14.104-38.64-6.776-14.566-24.076-20.872-38.642-14.108zM890.948 693.816c2.786-252.688 28.762-730.206-454.97-691.612-477.6 38.442-350.964 542.968-358.082 711.95-6.308 89.386-35.978 198.648-77.896 309.846h129.1c13.266-47.122 23.024-93.72 27.232-138.15 7.782 5.428 16.108 10.674 24.994 15.7 14.458 8.518 26.884 19.844 40.040 31.834 30.744 28.018 65.59 59.774 133.712 63.752 4.572 0.262 9.174 0.394 13.676 0.394 68.896 0 116.014-30.154 153.878-54.382 18.14-11.612 33.818-21.64 48.564-26.452 41.91-13.12 78.532-34.296 105.904-61.252 4.276-4.208 8.242-8.538 11.962-12.948 15.246 55.878 36.118 118.758 59.288 181.504h275.65c-66.174-102.224-134.436-202.374-133.052-330.184zM124.11 556.352c0-0.016 0-0.030-0.002-0.046-4.746-82.462 34.71-151.832 88.126-154.936 53.412-3.106 100.56 61.228 105.304 143.692 0 0.014 0.004 0.030 0.004 0.044 0.256 4.446 0.368 8.846 0.37 13.206-16.924 4.256-32.192 10.436-45.872 17.63-0.052-0.612-0.092-1.216-0.152-1.83 0-0.008 0-0.018 0-0.026-4.57-46.81-29.572-82.16-55.852-78.958-26.28 3.204-43.88 43.75-39.312 90.558 0 0.010 0.004 0.018 0.004 0.026 1.992 20.408 7.868 38.636 16.042 52.444-2.034 1.604-7.784 5.812-14.406 10.656-4.97 3.634-11.020 8.058-18.314 13.43-19.882-26.094-33.506-63.58-35.94-105.89zM665.26 760.178c-1.9 43.586-58.908 84.592-111.582 101.044l-0.296 0.096c-21.9 7.102-41.428 19.6-62.104 32.83-34.732 22.224-70.646 45.208-122.522 45.208-3.404 0-6.894-0.104-10.326-0.296-47.516-2.778-69.742-23.032-97.88-48.676-14.842-13.526-30.19-27.514-49.976-39.124l-0.424-0.244c-42.706-24.104-69.212-54.082-70.908-80.194-0.842-12.98 4.938-24.218 17.182-33.4 26.636-19.972 44.478-33.022 56.284-41.658 13.11-9.588 17.068-12.48 20-15.264 2.096-1.986 4.364-4.188 6.804-6.562 24.446-23.774 65.36-63.562 128.15-63.562 38.404 0 80.898 14.8 126.17 43.902 21.324 13.878 39.882 20.286 63.38 28.4 16.156 5.578 34.468 11.902 58.992 22.404l0.396 0.164c22.88 9.404 49.896 26.564 48.66 54.932zM652.646 657.806c-4.4-2.214-8.974-4.32-13.744-6.286-22.106-9.456-39.832-15.874-54.534-20.998 8.116-15.894 13.16-35.72 13.624-57.242 0-0.010 0-0.022 0-0.030 1.126-52.374-25.288-94.896-58.996-94.976-33.71-0.078-61.95 42.314-63.076 94.686 0 0.010 0 0.018 0 0.028-0.038 1.714-0.042 3.416-0.020 5.11-20.762-9.552-41.18-16.49-61.166-20.76-0.092-1.968-0.204-3.932-0.244-5.92 0-0.016 0-0.036 0-0.050-1.938-95.412 56.602-174.39 130.754-176.402 74.15-2.014 135.828 73.7 137.772 169.11 0 0.018 0 0.038 0 0.052 0.874 43.146-10.66 82.866-30.37 113.678z"></path>
                                            </svg>
                                            Download for Linux
                                        </a>
                                    </div>

                                    <button onClick={handleLogout} className="bg-[#000000] text-white font-bold py-2 px-10 rounded">Logout</button>
                                </div>
                            )
                            : <Spin />
                    }
                </div>
            </div>

            <Footer />
        </div>
    );
};