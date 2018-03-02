// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import {injectGlobal} from 'styled-components';
import App from "./App";
import {BACKGROUND_COLOR} from "./Colors";

injectGlobal`
  body {
    margin: 0;
    background-color: ${BACKGROUND_COLOR};
  }
`;

const root = document.getElementById('root');
if(root) {
  ReactDOM.render(<App/>, root);
}
