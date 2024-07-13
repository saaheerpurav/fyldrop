import React, { useState, useEffect } from "react";
import { TbMessageChatbot, TbChevronDown } from "react-icons/tb";

const chatbotUrl = "https://chatbot.saaheerpurav.com"

export default function Chatbot() {
    const [windowVis, setWindowVis] = useState(false);
    const [alertVis, setAlertVis] = useState(true);
    const [bubbleVis, setBubbleVis] = useState(false);

    const closeIframe = (e) => {
        if (e.data === "iframe_close") setWindowVis(false);
    }

    useEffect(() => {
        window.addEventListener("message", closeIframe);

        return () => {
            window.removeEventListener("message", closeIframe);
        };
    }, [])

    return (
        <>
            <div className="fixed bottom-0 right-0 md:bottom-[88px] md:right-5 z-[999]" style={{ display: windowVis ? "block" : "none" }}>
                <iframe src={`${chatbotUrl}/chatbot-iframe?id=8509d376`} className="h-[100vh] md:h-[60vh] w-[100vw] md:w-96" onLoad={() => { setBubbleVis(true); }} id="iframe-window"></iframe>
            </div>

            <div className="fixed bottom-5 right-5 z-[99]">
                {
                    alertVis && bubbleVis
                        ? <div id="alert-5" className="absolute bottom-[4.5rem] right-[1.5rem] flex flex-row items-center px-4 py-2 whitespace-nowrap rounded-lg bg-[#007aff] text-white" role="alert">
                            <div className="absolute right-0 bottom-[-15px] w-0 h-0 border-[25px] border-l-[25px] rounded border-r-[0px] border-transparent border-t-[#007aff] border-b-0 z-[999]"></div>
                            <p className="mr-4">Have any questions?</p>

                            <button className="bg-[#007aff]" onClick={() => { setAlertVis(false); }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                    <path fill="white"
                                        d="M2.39705176,2.55378835 L2.46966991,2.46966991 C2.73593648,2.20340335 3.15260016,2.1791973 3.44621165,2.39705176 L3.53033009,2.46966991 L8,6.939 L12.4696699,2.46966991 C12.7625631,2.1767767 13.2374369,2.1767767 13.5303301,2.46966991 C13.8232233,2.76256313 13.8232233,3.23743687 13.5303301,3.53033009 L9.061,8 L13.5303301,12.4696699 C13.7965966,12.7359365 13.8208027,13.1526002 13.6029482,13.4462117 L13.5303301,13.5303301 C13.2640635,13.7965966 12.8473998,13.8208027 12.5537883,13.6029482 L12.4696699,13.5303301 L8,9.061 L3.53033009,13.5303301 C3.23743687,13.8232233 2.76256313,13.8232233 2.46966991,13.5303301 C2.1767767,13.2374369 2.1767767,12.7625631 2.46966991,12.4696699 L6.939,8 L2.46966991,3.53033009 C2.20340335,3.26406352 2.1791973,2.84739984 2.39705176,2.55378835 L2.46966991,2.46966991 L2.39705176,2.55378835 Z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                        : null
                }

                {
                    bubbleVis
                        ? <button className="bg-[#007aff] w-[3rem] h-[3rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)] outline-none rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"
                            onClick={() => { setWindowVis(!windowVis); setAlertVis(false); }} title="Chatbot">
                            {
                                windowVis
                                    ? <TbChevronDown color="white" size={27} />
                                    : <TbMessageChatbot color="white" size={27} />
                            }
                        </button>
                        : null
                }
            </div>
        </>
    );
}
