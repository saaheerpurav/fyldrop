import React from 'react'

import { Helmet } from 'react-helmet'

import EmailForm from '../components/email-form'
import './newsletter.css'

const Newsletter = (props) => {
  return (
    <div className="newsletter-container">
      <Helmet>
        <title>Get FylDrop Product Updates</title>
        <meta property="og:title" content="Newsletter" />
      </Helmet>
      <EmailForm />
    </div>
  )
}

/*
<iframe
        src="https://share.hsforms.com/1W6y3-KvhTw264hr03VaxWgp647a"
        className="newsletter-iframe"
      ></iframe>
*/

export default Newsletter
