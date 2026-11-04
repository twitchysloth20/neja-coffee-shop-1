export const NJCustomRouteType = {
  ROUTE: 1,
  INDEX: 2,
  LAYOUT: 3,
  PREFIX: 4,
} as const;

export type NJCustomRouteType = (typeof NJCustomRouteType)[keyof typeof NJCustomRouteType];

export interface NJCustomRoute {
  // TODO: move path and component to shared route type in react-ui
  path: string,
  component: string,
  type: NJCustomRouteType
  children?: NJCustomRoute[],
  navbar?: {
    label: string,
    show: boolean,
  },
}

export interface NJNavbarRoute {
  label: string,
  show: boolean,
  url: string,
  parentUrl?: string,
  children?: NJNavbarRoute[],
}
