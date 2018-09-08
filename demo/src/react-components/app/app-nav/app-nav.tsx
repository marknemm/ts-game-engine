import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Drawer, Hidden, withStyles, StyledComponentProps, List } from '@material-ui/core';
import * as styles from './app-nav.style';
import AppRoute from '../app-route/app-route';
import AppLink from '../app-link/app-link';

interface IAppNavProps extends StyledComponentProps, RouteComponentProps<any> {
  appRoutes: AppRoute[];
  drawerOpen: boolean;
  toggleDrawer: () => void;
}

class AppNav extends React.Component<IAppNavProps> {

  private readonly _drawerContents: JSX.Element;

  constructor(props: IAppNavProps) {
    super(props);
    this.state = {
      drawerOpen: false,
    };
    this._drawerContents = (
      <List component="nav">
        {props.appRoutes.map((appRoute: AppRoute) => <AppLink appRoute={appRoute} key={appRoute.label} />)}
      </List>
    );
  }

  /**
   * @override React.Component
   */
  render(): JSX.Element {
    const { classes, drawerOpen, toggleDrawer } = this.props;

    return (
      <div>
        <Hidden mdUp>
          <Drawer variant="temporary" open={drawerOpen} onClose={toggleDrawer} ModalProps={{ keepMounted: true }} classes={{ paper: classes.appNavDrawer }}>
            {this._drawerContents}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer variant="permanent" open classes={{ paper: classes.appNavDrawer }}>
            {this._drawerContents}
          </Drawer>
        </Hidden>
      </div>
    );
  }
}

export default withRouter(withStyles(styles.appNavTheme, { withTheme: true })(AppNav));
