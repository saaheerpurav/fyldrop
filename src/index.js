import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import { AuthProvider } from './Auth'

import Home from './views/home'
import Newsletter from './views/newsletter'
import SignupScreen from './app/signup'
import LoginScreen from './app/login'
import Dashboard from './app/dashboard'
import Billing from './app/billing'

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Route component={Home} exact path="/" />
          <Route component={Newsletter} exact path="/newsletter" />

          <Route exact path="/signup/appsumo" render={(props) => <SignupScreen appSumo={true} />} />
          <Route exact path="/signup" render={(props) => <SignupScreen appSumo={false} />} />
          <Route exact path="/login" render={(props) => <LoginScreen />} />

          <Route component={Dashboard} exact path="/account" />
          <Route component={Billing} exact path="/billing" />
        </div>
      </Router>
    </AuthProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
