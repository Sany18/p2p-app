import React from 'react';

import { Link } from 'react-router-dom';
import { IconButton } from 'components/IconButton/IconButton';

export const Navbar: React.FC = () => {
  return (
    <nav className='flex justify-content-between p-2'>
      <div className='flex align-items-center gap-2'>
        <Link to="/">
          <IconButton icon='arrow_back' />
        </Link>

        <span className='font-weight-600'>
          P2P App
        </span>
      </div>

      <div>
        <IconButton icon='more_vert' />
      </div>
    </nav>
  );
}
