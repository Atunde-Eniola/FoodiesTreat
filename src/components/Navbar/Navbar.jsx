import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import * as GiIcons from 'react-icons/gi';
import * as FaIcons from 'react-icons/fa';
import * as FcIcons from 'react-icons/fc';

const links = [
  {
    name: 'Home',
    path: '/',
    icon: <FcIcons.FcHome />,
  },
  {
    name: 'Recipes',
    path: '/recipes',
    icon: <FcIcons.FcList />,
  },
  {
    name: 'Settings',
    path: '/settings',
    icon: <FaIcons.FaCog />,
  },
  {
    name: 'Nutrients',
    path: '/nutrients',
    icon: <GiIcons.GiOpenedFoodCan />,
  },
  {
    name: 'About',
    path: '/about',
    icon: <FcIcons.FcAbout />,
  },
  {
    name: 'Contact',
    path: '/contact',
    icon: <FcIcons.FcBusinessContact />,
  },
];

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  const location = useLocation();

  return (
    <div>
      <div className='navbar container'>
        <Link to='/' className='logo'>
          Foodie<span>sT</span>reat
        </Link>
        <div className='nav-links'>
          {links.map(link => (
            <Link
              to={link.path}
              key={link.name}
              className={
                location.pathname === link.path ? 'active' : 'sidebar-link'
              }>
              {link.name}
            </Link>
          ))}
        </div>
        <div
          onClick={() => setShowSidebar(!showSidebar)}
          className={showSidebar ? 'sidebar-btn active' : 'sidebar-btn'}>
          <div className='bar' />
          <div className='bar' />
          <div className='bar' />
        </div>
      </div>
      {showSidebar && <Sidebar close={closeSidebar} links={links} />}
    </div>
  );
};

export default Navbar;
