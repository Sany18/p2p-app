// import logo from 'assets/logo.svg';
// {/* <img src={logo} className="App-logo" alt="logo" /> */}

import React from 'react';

import { Navbar } from 'components/Navbar/Navbar';
import { Button } from 'components/Button/Button';
import { Divider } from 'components/Divider/Divider';
import { IconButton } from 'components/IconButton/IconButton';

import './App.scss';

function App() {
  return (
    <div>
      <Navbar />
      <Divider color='gray' />
      <div className='px-2 py-3 flex gap-2'>
        <Button type='flat'>
          <span className='material-symbols-outlined'>
            autorenew
          </span>
          P2P Market
        </Button>
        <Button type='stroked'>
          <span className='budge'>
            1
          </span>
          My Orders
        </Button>
        <IconButton type='flat' icon='account_balance_wallet' />
      </div>
      <Divider color='blue' />
      <div className='flex align-items-center justify-content-center p-3'>
        16 trades, ⭐ 90%
      </div>
      <Divider color='blue' />
    </div>
  );
}

export default App;
