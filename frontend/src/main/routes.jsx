import React from 'react'

import { BrowserRouter as Router, Switch, Route, Redirect  } from 'react-router-dom'

import AuthOrApp from './authOrApp'
import Dashboard from '../dashboard2/dashboard2'
import BillingCycle from '../billingCycle/billingCycle'

export default props => (
    <Router>
        <Switch>
            <AuthOrApp>
                <Route path='/' exact component={Dashboard} title='Homepage' />
                <Route path='/billingCycles' exact component={BillingCycle} />
            </AuthOrApp>
            <Redirect path='*' to='/' />
        </Switch>
    </Router>
)