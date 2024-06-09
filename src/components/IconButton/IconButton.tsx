import React from 'react';

import './IconButton.scss';

type IconButtonProps = {
  icon?: string;
  onClick?: () => void;
};
export const IconButton: React.FC<IconButtonProps> = ({ icon, onClick }) => {
  return (
    <button
      className='icon-button'
      onClick={onClick}>
      <span className='material-symbols-outlined'>{icon}</span>
    </button>
  );
}
