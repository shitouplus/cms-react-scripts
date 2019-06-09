import React from 'react';
import { Provider } from "mobx-react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
import './App.css';
import DefaultLayout from './layouts/default';
import stores from './models'

const theme = createMuiTheme({
  palette: {
    primary: lightBlue
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        color: '#fff'
      },
    },
  },
});

function App () {
  return (
    <div className="App">
      <Provider {...stores}>
        <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route component={DefaultLayout} />
          </Switch>
        </Router>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
