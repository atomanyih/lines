import React from 'react';
import ReactDOM from 'react-dom';
import styled, {injectGlobal} from 'styled-components';

injectGlobal`
  body {
    margin: 0;
    background-color: pink;
  }
`;

const Hi = styled.div`
  font-weight: bold;
`;

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Hi>
          yo sup
        </Hi>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));