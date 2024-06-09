import React from 'react';

import './Divider.scss';

type Props = {
  color?: string;
}
export const Divider: React.FC<Props> = ({ color }) => {
  return (
    <hr className={`divider ${color}`} />
  );
}
