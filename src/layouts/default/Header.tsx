import { NavLink } from 'react-router';
import { routes } from '../../config/routes';
import { convertToNavbarRoutes, flattenVisibleRoutes } from '../../helpers/routes-helper';
import { NJNavbar, NJNavbarLink, NJNavbarLinks, NJNavbarMenu, NJNavbarToggle } from '@neja-digital/react-ui';

const navRoutes = convertToNavbarRoutes(routes);
const visibleRoutes = flattenVisibleRoutes(navRoutes);

export default function Header() {
  return (
    <header className="site-header">
      <NJNavbar aria-label="Main">
        <NJNavbarToggle />
        <NJNavbarMenu>
          <NJNavbarLinks>
            {visibleRoutes.map(route => (
              <NJNavbarLink
                key={route.url}
                as={NavLink}
                to={route.url}
                end={route.url === '/'}
                data-parent-url={route.parentUrl ?? undefined}>
                {route.label}
              </NJNavbarLink>
            ))}
          </NJNavbarLinks>
        </NJNavbarMenu>
      </NJNavbar>
    </header>
  );
}
