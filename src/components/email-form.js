import React, { useState } from 'react'

import '../views/home.css'

const EmailForm = (props) => {
    /*const [email, setEmail] = useState("");

    const submit = () => {
        let re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (re.test(email)) {
            const options = {
                method: 'POST',
                headers: { Authorization: "Bearer sk_" },
                body: `{"email":${email},"subscribed":true}`
            };

            fetch("https://api.useplunk.com/v1/contacts", options)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
        }
    }*/

    return (
        <div className="home-features1" style={{ textAlign: "center" }}>

            <h1 className="home-text063" style={{ marginBottom: 20 }}>Get the Latest Product Updates</h1>
            <span className="home-text2">Straight to your inbox</span>
            <iframe
                src="https://share.hsforms.com/1W6y3-KvhTw264hr03VaxWgp647a"
                className="newsletter-iframe"
            ></iframe>

        </div>
    )
}

/*
 <br></br>
            <br></br>
            <br></br>
            <input placeholder="Enter your email" className="email-input" type="email" onChange={(e) => { setEmail(e.target.value); }} />
            <br></br>
            <br></br>
            <button onClick={submit} className="home-button button" style={{ padding: "10px 50px", width: "min-content" }}>
                <span className="home-text2">Submit</span>
            </button>
*/

export default EmailForm
