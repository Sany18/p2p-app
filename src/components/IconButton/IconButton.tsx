import React from 'react';

import './IconButton.scss';

type IconButtonProps = {
  icon?: string;
  type?: 'flat' | 'stroked' | 'default';
  onClick?: () => void;
};
export const IconButton: React.FC<IconButtonProps> = ({ icon, onClick, type }) => {
  return (
    <button
      className={`icon-button icon-button-${type || 'default'}`}
      onClick={onClick}>
      <span className='material-symbols-outlined'>{icon}</span>
    </button>
  );
}
