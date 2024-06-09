// import logo from 'assets/logo.svg';
// {/* <img src={logo} className="App-logo" alt="logo" /> */}

import React from 'react';

import { Navbar } from 'components/Navbar/Navbar';
import { Divider } from 'components/Divider/Divider';

import './App.scss';

function App() {
  return (
    <div>
      <Navbar />
      <Divider color='gray'  />
    </div>
  );
}

export default App;
