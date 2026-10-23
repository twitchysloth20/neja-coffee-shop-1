import { NJCustomRouteType, type NJCustomRoute } from '../types/routes';

export const routes: NJCustomRoute[] = [
  {
    path: '',
    component: 'layouts/default/Layout.tsx',
    type: NJCustomRouteType.LAYOUT,
    children: [
      {
        path: '/',
        component: 'pages/Homepage.tsx',
        type: NJCustomRouteType.INDEX,
        navbar: {
          label: 'Home',
          show: true,
        },
      },
      {
        path: '/about',
        component: 'pages/About.tsx',
        type: NJCustomRouteType.ROUTE,
        navbar: {
          label: 'About',
          show: true,
        },
      },
    ],
  },
];
