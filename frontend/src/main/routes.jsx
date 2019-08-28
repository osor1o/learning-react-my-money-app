import React from 'react'

import { BrowserRouter as Router, Switch, Route, Redirect  } from 'react-router-dom'

import App from './App'
import Dashboard from '../dashboard2/dashboard2'
import BillingCycle from '../billingCycle/billingCycle'

export default props => (
    <Router>
        <Switch>
            <App>
                <Route path='/' exact component={Dashboard} title='Homepage' />
                <Route path='/billingCycles' exact component={BillingCycle} />
            </App>
            <Redirect path='*' to='/' />
        </Switch>
    </Router>
)