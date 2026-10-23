import { index, layout, prefix, route, type RouteConfigEntry } from '@react-router/dev/routes';
import { type NJCustomRoute, NJCustomRouteType, type NJNavbarRoute } from '../types/routes';

const unsupportedRoute = ({ path, type, children }: NJCustomRoute): Error => {
  return new Error(`Unsupported route: type ${type}${children ? ' with children' : ''} (path "${path}")`);
};

const parseRoute = (customRoute: NJCustomRoute): RouteConfigEntry => {
  const { path, component, type } = customRoute;

  switch (type) {
    case NJCustomRouteType.ROUTE:
      return route(path, component);
    case NJCustomRouteType.INDEX:
      return index(component);
    default:
      throw unsupportedRoute(customRoute);
  }
};

export const convertToReactRoutes = (routes: NJCustomRoute[]): RouteConfigEntry[] => {
  return routes.flatMap((r) => {
    if (!r.children) return parseRoute(r);

    switch (r.type) {
      case NJCustomRouteType.ROUTE:
        return route(r.path, r.component, convertToReactRoutes(r.children));
      case NJCustomRouteType.LAYOUT:
        return layout(r.component, convertToReactRoutes(r.children));
      case NJCustomRouteType.PREFIX:
        return prefix(r.path, convertToReactRoutes(r.children));
      default:
        throw unsupportedRoute(r);
    }
  });
};

/**
 * Converts the custom routes to the routes used by the navbar.
 *
 * @param routes Routes to convert
 * @param parentPath Path of the ancestors, used to build each route's url
 * @param parentUrl Url of the closest ancestor shown in the navbar, if any
 */
export const convertToNavbarRoutes = (
  routes: NJCustomRoute[],
  parentPath = '',
  parentUrl?: string,
): NJNavbarRoute[] => {
  return routes.flatMap(route => {
    const path = route.type === NJCustomRouteType.INDEX
      ? parentPath
      : `${parentPath}/${route.path}`.replace(/\/+/g, '/');

    const childrenParentUrl = route.navbar ? path || '/' : parentUrl;
    const children = route.children ? convertToNavbarRoutes(route.children, path, childrenParentUrl) : [];

    if (route.type === NJCustomRouteType.LAYOUT || route.type === NJCustomRouteType.PREFIX) return children;

    if (!route.navbar) {
      return children;
    }

    return [{
      label: route.navbar.label,
      show: route.navbar.show,
      url: path || '/',
      parentUrl,
      ...(children.length > 0 ? { children } : {}),
    }];
  });
};

/**
 * Creates a flat array of routes we have to show in the navbar. Removes children property.
 * The link between parent-child is kept through parent.url and child.parentUrl properties.
 * 
 * @param routes 
 * @returns Flat array of routes to display
 */
export const flattenVisibleRoutes = (routes: NJNavbarRoute[]): NJNavbarRoute[] => {
  return routes.flatMap(route => {
    const { children, ...routeWithoutChildren } = route;

    return [
      ...(route.show ? [routeWithoutChildren] : []),
      ...flattenVisibleRoutes(children ?? []),
    ];
  });
};
