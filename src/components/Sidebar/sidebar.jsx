import React from 'react';

import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <ul>
      <li><Link to="/">Index</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  );
}

export default Sidebar;
