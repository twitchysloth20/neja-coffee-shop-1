import { type RouteConfig } from '@react-router/dev/routes';
import { routes } from './config/routes';
import { convertToReactRoutes } from './helpers/routes-helper';

export default [
  ...convertToReactRoutes(routes),
] satisfies RouteConfig;
