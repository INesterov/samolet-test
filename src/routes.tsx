import React from 'react'
import { Switch, Route } from 'react-router-dom'
import RegionsList from './pages/RegionsList'
import RegionInfo from './pages/RegionInfo'

const Routes = () => (
  <Switch>
    <Route exact path='/'>
      <RegionsList />
    </Route>
    <Route path='/region/:order'>
      <RegionInfo />
    </Route>
  </Switch>
)

export default Routes
