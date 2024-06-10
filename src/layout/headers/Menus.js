import Link from "next/link";
import { Fragment, useState } from "react";

const DeskTopMenus = () => {
  return (
    <nav className="main-menu desktop-menu">
      <ul>
        <li className="menu-item has-children">
          <a href="/">Home</a>
        </li>
        <li className="menu-item">
          <Link legacyBehavior href="https://wraith92.github.io/portfolio-dahmen/">About</Link>
        </li>
        <li className="menu-item has-children">
          <a href="/reservations">reservations</a>
        </li>
      </ul>
    </nav>
  );
};

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  
  const toggleActiveMenu = (menu) => setActiveMenu(activeMenu === menu ? null : menu);
  
  return (
    <nav className="main-menu mobile-menu">
      <ul>
        <li className="menu-item">
          <a href="#" onClick={() => toggleActiveMenu('home')}>
            Home
            <span className={`dd-trigger ${activeMenu === 'home' ? 'sub-menu-open' : ''}`}>
              <i className="far fa-angle-down" />
            </span>
          </a>
          {/* Affichez des sous-menus ici si nécessaire, comme dans DesktopMenu */}
        </li>
        <li className="menu-item">
          <Link legacyBehavior href="https://wraith92.github.io/portfolio-dahmen/">
            About
          </Link>
        </li>
        <li className="menu-item">
          <a href="/reservations" onClick={() => toggleActiveMenu('reservations')}>
            Reservations
            <span className={`dd-trigger ${activeMenu === 'reservations' ? 'sub-menu-open' : ''}`}>
              <i className="far fa-angle-down" />
            </span>
          </a>
          {/* Affichez des sous-menus ici si nécessaire, comme dans DesktopMenu */}
        </li>
      </ul>
    </nav>
  );
};

const Menus = () => {
  return (
    <Fragment>
      <DeskTopMenus />
      <MobileMenu />
    </Fragment>
  );
};

export default Menus;
