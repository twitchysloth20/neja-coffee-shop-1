import { Link } from 'react-router';
import { routes } from '../../config/routes';
import { convertToNavbarRoutes, flattenVisibleRoutes } from '../../helpers/routes-helper';
import { NJButton, NJNavbar } from '@neja-digital/react-ui';
import useViewportSize from '../../hooks/useViewportSize';
import { useMemo } from 'react';
import { FaBars } from 'react-icons/fa';

const navRoutes = convertToNavbarRoutes(routes);
const visibleRoutes = flattenVisibleRoutes(navRoutes);

export default function Header() {
  const visibleRoutesJsx = visibleRoutes.map(route => (
    <Link
      key={route.url}
      to={route.url}
      data-parent-url={route.parentUrl ?? undefined}
      className="nj-navbar__link">
      {route.label}
    </Link>
  ));

  const { width } = useViewportSize();

  const isMobile = useMemo<boolean>(() => {
    return width < 768;
  }, [width]);

  const routesJsx = isMobile
    ? <NJButton><FaBars /></NJButton>
    : visibleRoutesJsx;

  return (
    <>
      <header>
        <NJNavbar>
          {routesJsx}
        </NJNavbar>
      </header>
    </>
  );
}
