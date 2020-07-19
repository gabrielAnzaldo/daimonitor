import React from 'react';
import { Router } from '@reach/router';
import Home from './pages/Home';
import Alarm from './pages/Alarm';
import './App.css';

const App = () => {
  return(
    <>
      <h1>DAI monitor</h1>
      <main>
        <Router>
          <Home path="daimonitor" />
          <Alarm path="alarma" />
        </Router>
      </main>
    </>
  );
}

export default App;
