// @flow
import React from 'react';
import Square from "./scenes/Square";
import Circle from "./scenes/Circle";
import {withProps, withStateHandlers} from "recompose";

const App = ({sceneName}) => {
  switch (sceneName) {
    case 'circle':
      return <Circle/>;
    case 'square':
      return <Square/>;
  }
};

export default withProps(
  {
    sceneName: window.location.hash.slice(1) || 'square'
  }
)(App)