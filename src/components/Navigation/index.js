import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';


import * as ROUTES from '../../constants/routes';

const Navigation = () => (
  <div className="navbar">
    <ul>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={ROUTES.ABOUT}>About</Link>
      </li>
    </ul>
  </div>
);

export default Navigation
