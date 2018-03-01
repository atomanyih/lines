// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import {injectGlobal} from 'styled-components';
import App from "./App";

injectGlobal`
  body {
    margin: 0;
    background-color: pink;
  }
`;

const root = document.getElementById('root');
if(root) {
  ReactDOM.render(<App/>, root);
}
