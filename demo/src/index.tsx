import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';

import 'typeface-roboto';
import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';
import * as styles from './index.style';
import registerServiceWorker from './register-service-worker';
import App from './react-components/app/app';

const root = (
  <React.Fragment>
    <CssBaseline>
      <MuiThemeProvider theme={styles.theme}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </MuiThemeProvider>
    </CssBaseline>
  </React.Fragment>
);
ReactDOM.render(root, document.getElementById('root') as HTMLElement);
registerServiceWorker();
