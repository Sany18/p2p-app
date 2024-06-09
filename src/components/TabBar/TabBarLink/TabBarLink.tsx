import React from 'react';
import { Link } from 'react-router-dom';

import './TabBarLink.scss';

type Props = {
  to?: string;
  active?: boolean;
  children?: React.ReactNode;
}
export const TabBarLink: React.FC<Props> = ({ to, active, children }) => {
  return (
    <Link
      to={to}
      className={`tab-bar-link ${active ? 'active' : ''}`}>
      { children }
    </Link>
  );
}
