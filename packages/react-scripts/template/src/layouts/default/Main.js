import React from 'react'
import { Route, Switch } from "react-router-dom";
import Routes from '@/routers'

class Main extends React.Component {
  render () {
    return (
      <Switch>
        {
          Routes.map(item => <Route key={item.name} path={item.path} component={item.component} />)
        }
      </Switch>
    )
  }
}

export default Main
