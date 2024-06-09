import React from 'react';

import './Divider.scss';

type Props = {
  color?: string;
  vertical?: boolean;
}
export const Divider: React.FC<Props> = ({ color, vertical }) => {
  return (
    <hr className={`divider ${color} ${vertical ? 'vertical' : ''}`} />
  );
}
