import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import DefaultLayout from './layouts/default';

function App () {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route component={DefaultLayout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
