import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  console.log(props)
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <span className="navigation-links-text">{props.text1}</span>
      <span className="navigation-links-text1">{props.text2}</span>
      <span className="navigation-links-text2">{props.text21}</span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text2: 'Pricing',
  text21: 'About',
  rootClassName: '',
  text4: 'Blog',
  text1: 'Features',
  text: 'About',
  text3: 'Team',
}

NavigationLinks.propTypes = {
  text2: PropTypes.string,
  text21: PropTypes.string,
  rootClassName: PropTypes.string,
  text4: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
}

export default NavigationLinks
