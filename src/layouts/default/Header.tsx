import { Link } from 'react-router';
import { routes } from '../../config/routes';
import { convertToNavbarRoutes, flattenVisibleRoutes } from '../../helpers/routes-helper';
import { NJButton, NJNavbar } from '@neja-digital/react-ui';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import MobileNav from '../../components/shared/MobileNav';
import '../../assets/css/header.css';

const navRoutes = convertToNavbarRoutes(routes);
const visibleRoutes = flattenVisibleRoutes(navRoutes);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const closeMenu = () => setIsMenuOpen(false);

  const routesJsx = visibleRoutes.map(route => (
    <Link
      key={route.url}
      to={route.url}
      data-parent-url={route.parentUrl ?? undefined}
      className="nj-navbar__link"
      onClick={closeMenu}>
      {route.label}
    </Link>
  ));

  return (
    <header className="site-header">
      <NJNavbar>
        <div className="site-header__routes">
          {routesJsx}
        </div>
        <NJButton
          className="site-header__toggle"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="site-header-menu"
          onClick={() => setIsMenuOpen(open => !open)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </NJButton>
      </NJNavbar>
      <div id="site-header-menu" className="site-header__menu">
        <MobileNav njShow={isMenuOpen}>
          {routesJsx}
        </MobileNav>
      </div>
    </header>
  );
}
