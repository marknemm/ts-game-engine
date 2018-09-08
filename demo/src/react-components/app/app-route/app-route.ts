import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export class AppRoute {

  readonly url?: string;
  readonly label?: string;
  readonly icon?: JSX.Element;
  readonly component?: React.ComponentType;
  readonly children?: AppRoute[];
  private readonly _routeProps: RouteComponentProps<any>;

  /**
   * Constructrs an AppRoute object that has children. Such an AppRoute will not be used for routing, but will be used as a UI tree parent
   * node for other AppRoutes (which may or may not have children).
   * @param routeProps The RouteComponentProps used for routing.
   * @param label The label that is displayed in the link to the user.
   * @param icon The incon that is displayed to the left of the label.
   * @param children The child AppRoutes.
   */
  constructor(routeProps: RouteComponentProps<any>, label: string, icon: JSX.Element, children: AppRoute[]);
  /**
   * Constructs an AppRoute object that is used for routing.
   * @param routeProps The RouteComponentProps used for routing.
   * @param label The label that is displayed in the link to the user.
   * @param icon The icon that is displayed to the left of the label.
   * @param url The route URL (path).
   * @param component The react component that is the route target.
   */
  constructor(routeProps: RouteComponentProps<any>, label: string, icon: JSX.Element, url: string, component: React.ComponentType);
  constructor(
    routeProps: RouteComponentProps<any>,
    label: string,
    icon: JSX.Element,
    urlOrChildren: string | AppRoute[],
    component?: React.ComponentType,
  ) {
    this._routeProps = routeProps;
    this.label = label;
    this.icon = icon;

    // Init leaf AppRoute node for routing purposes.
    if (component) {
      this.url = urlOrChildren as string;
      this.component = component;
      this.reroute = this.reroute.bind(this);
    }
    // Init non-leaf AppRoute node to hold child AppRoutes.
    else {
      this.children = urlOrChildren as AppRoute[];
    }
  }

  reroute(): void {
    if (this.url) {
      this._routeProps.history.push(this.url);
    }
  }
}

export default AppRoute;
