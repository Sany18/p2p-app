import React from 'react';

import './TabBar.scss';

type Props = {
  children: React.ReactNode;
}
export const TabBar: React.FC<Props> = ({ children }) => {
  return (
    <div className='tab-bar'>
      { children }
    </div>
  );
}
