import React, { useState, useEffect } from 'react';
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { Button, Result, Spin } from 'antd';

import { useAuth } from '../Auth';
import { fs } from '../firebase';
import { collection, doc, updateDoc, getDocs, query, where, serverTimestamp } from "firebase/firestore";

export default function PayPalCheckout() {
    const { currentUser } = useAuth();
    const [{ isPending }] = usePayPalScriptReducer();
    const [subId, setSubId] = useState(null);
    const [pid, setPid] = useState(null);

    const paypalSubscribe = (data, actions) => {
        return actions.subscription.create({
            "plan_id": "P-9HK68000HK9651340MZU6WYQ"
        });
    };

    useEffect(() => {
        if (currentUser !== null) localStorage.setItem("currentUserId", currentUser.uid)
    }, [currentUser])

    useEffect(() => {
        const fetchUserData = async () => {
            let q = query(collection(fs, "accounts"), where("userId", "==", currentUser.uid));
            let querySnapshot = await getDocs(q);

            querySnapshot.forEach((docSnap) => {
                let tier = docSnap.data().tier;
                if(tier !== "free") window.location.href = "/account";
            })
        };

        if (currentUser !== null) fetchUserData();
    }, [currentUser])

    const paypalOnError = (err) => {
        console.log(err)
    }
    const paypalOnCancel = () => {
        console.log("Cancelled")
    }

    const paypalOnApprove = async (data, detail) => {
        console.log("Purchase Successful")

        let cid = localStorage.getItem("currentUserId");
        let userDocId;

        let q = query(collection(fs, "accounts"), where("userId", "==", cid));
        let querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            userDocId = doc.id;
        });

        updateDoc(doc(fs, "accounts", userDocId), {
            tier: "pro",
            purchaseDate: serverTimestamp(),
            subscriptionID: data.subscriptionID
        });

        setSubId(data.subscriptionID);
    };

    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", }}>
            {
                subId !== null
                    ? <Result
                        status="success"
                        title={`Thank you for purchasing the Pro plan!`}
                        extra={[
                            <Button type="link" href="/account">
                                Go to Account
                            </Button>
                        ]}
                    />
                    : isPending
                        ? <Spin size="large" style={{ marginTop: 50 }} />
                        : <div style={{ width: "50%", textAlign: "center" }}>
                            <p style={{ fontSize: 20, marginBottom: 10 }}>Select a payment method to purchase the Pro plan</p>

                            <p style={{ fontSize: 17, marginBottom: 30 }}>Having trouble?&nbsp;
                                <a href='mailto:info@fyldrop.com' target="_blank" style={{ color: "blue" }}>Contact us</a>
                                &nbsp;now</p>

                            <PayPalButtons style={{ layout: "vertical", shape: "pill", disableMaxWidth: true }} createSubscription={paypalSubscribe} onApprove={paypalOnApprove}
                                catchError={paypalOnError} onError={paypalOnError} onCancel={paypalOnCancel} />
                        </div>
            }
        </div>
    );
}
