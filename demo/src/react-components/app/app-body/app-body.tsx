import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { withStyles, StyledComponentProps } from '@material-ui/core';
import * as styles from './app-body.style';
import AppRoute from '../app-route/app-route';

interface IAppBodyProps extends StyledComponentProps {
  appRoutes: AppRoute[];
}

class AppBody extends React.Component<IAppBodyProps> {

  private readonly _routeElements: JSX.Element[];

  constructor(props: IAppBodyProps) {
    super(props);
    const flatAppRoutes: AppRoute[] = this._flattenAppRoutes(this.props.appRoutes);
    this._routeElements = flatAppRoutes.map((appRoute: AppRoute) => {
      return <Route exact path={appRoute.url} component={appRoute.component} key={appRoute.label}/>;
    });
  }

  /**
   * @override React.Component
   */
  render(): JSX.Element {
    const { classes } = this.props;

    return (
      <div className={classes.appBody}>
        <div className={'container ' + classes.appBodyContent}>
          <Switch>{this._routeElements}</Switch>
        </div>
      </div>
    );
  }

  private _flattenAppRoutes(appRoutes: AppRoute[], accumulator: AppRoute[] = []): AppRoute[] {
    return appRoutes.reduce<AppRoute[]>((acc: AppRoute[], curVal: AppRoute) => {
      if (curVal.children) {
        acc.concat(this._flattenAppRoutes(curVal.children, acc));
      }
      else {
        acc.push(curVal);
      }
      return acc;
    }, accumulator);
  }
}

export default withStyles(styles.appBodyTheme, { withTheme: true })(AppBody);
