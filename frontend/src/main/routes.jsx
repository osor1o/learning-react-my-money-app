import React from 'react'

import { Route, Redirect, Switch, HashRouter } from 'react-router-dom'
import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'

export default props => (
    <HashRouter>
        <Switch>
            <Route path='/' exact={true} component={Dashboard} />
            <Route path='/billingCycles' exact={true} component={BillingCycle} />
            <Redirect path='*' to='/' />
        </Switch>
    </HashRouter>
)