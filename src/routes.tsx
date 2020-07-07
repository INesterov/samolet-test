import React from 'react'
import { Switch, Route } from 'react-router-dom'
import RegionsList from './pages/RegionsList'

const Routes = () => (
  <Switch>
    <Route exact path='/'>
      <RegionsList />
    </Route>
  </Switch>
)

export default Routes
