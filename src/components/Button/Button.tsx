import React from 'react';

import './Button.scss';

type Props = {
  type?: 'flat' | 'stroked' | 'default';
  children?: React.ReactNode;
}
export const Button: React.FC<Props> = ({ type, children }) => {
  return (
    <button className={`button button-${type || 'default'}`}>
      { children }
    </button>
  );
}
