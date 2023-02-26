import React, { Fragment } from 'react';
import './App.css';
import ForwardCounter from './components/ForwardCounter/ForwardCounter';
import BackwardCounter from './components/BackwardCounter/BackwardCounter';

function App() {
  return (
    <Fragment>
      <ForwardCounter />
      <BackwardCounter />
    </Fragment>
  );
}

export default App;
