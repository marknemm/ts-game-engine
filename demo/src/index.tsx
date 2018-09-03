import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import './index.css';
import registerServiceWorker from './register-service-worker';
import { App } from './app-component/app';

const root = (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </MuiThemeProvider>
);
ReactDOM.render(root, document.getElementById('root') as HTMLElement);
registerServiceWorker();
