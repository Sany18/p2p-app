// import logo from 'assets/logo.svg';
// {/* <img src={logo} className="App-logo" alt="logo" /> */}

import React from 'react';

import { Navbar } from 'components/Navbar/Navbar';
import { Button } from 'components/Button/Button';
import { TabBar } from 'components/TabBar/TabBar';
import { Divider } from 'components/Divider/Divider';
import { IconButton } from 'components/IconButton/IconButton';
import { TabBarLink } from 'components/TabBar/TabBarLink/TabBarLink';

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
      <TabBar>
        <TabBarLink to='/'>New Ad</TabBarLink>
        <TabBarLink to='/' active>Active</TabBarLink>
        <TabBarLink to='/'>History</TabBarLink>
      </TabBar>

      <div className='bg-light-blue p-2'>
        <div className='card'>
          <div className='flex color-blue align-items-center justify-content-between p-4'>
            <div className='flex gap-2'>
              <div>INR</div>
              <span className="material-symbols-outlined">
                trending_flat
              </span>
              <div>USDT</div>
            </div>

            <div className='flex gap-2'>
              <div className='border-card-blue'>
                Buy
              </div>

              <div className='border-card-black'>
                Order ID: 398AX
              </div>
            </div>
          </div>

          <Divider />

          <div className='flex'>
            <div className='flex-1 p-4 flex flex-column gap-2'>
              <div className='font-weight-400'>
                Payment Method
              </div>

              <div className='flex gap-1'>
                <div className='font-weight-500'>
                  Bank transfer
                </div>
                <div className='border-card-blue small'>
                  Batch
                </div>
              </div>
            </div>

            <Divider vertical />

            <div className='flex-1 p-4 flex flex-column gap-2'>
              <div className='font-weight-400'>
                Seller
              </div>

              <div className='flex gap-1'>
                <div className='font-weight-500'>
                  Hadi94, ⭐️ <span className='font-weight-400'>98%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
