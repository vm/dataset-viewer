import React from 'react'
import { Switch, Route } from 'react-router-dom'

import DatasetList from './layouts/DatasetList'
import Dataset from './layouts/Dataset'

import './App.css'

const App = () => {
  return (
    <Switch>
      <Route path="/dataset/:name" component={Dataset}/>
      <Route path="/" component={DatasetList}/>
    </Switch>
  )
}

export default App
