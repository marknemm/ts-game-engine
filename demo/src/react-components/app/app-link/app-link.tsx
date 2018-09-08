import * as React from 'react';
import {
  withStyles,
  StyledComponentProps,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import * as styles from './app-link.style';
import AppRoute from '../app-route/app-route';

interface IAppLinkProps extends StyledComponentProps {
  appRoute: AppRoute;
  treeLv?: number;
}
interface IAppLinkState {
  expanded: boolean;
}

class AppLink extends React.Component<IAppLinkProps, IAppLinkState> {

  private _tempState: IAppLinkState;

  constructor(props: IAppLinkProps) {
    super(props);
    this.state = { expanded: false };
    this._tempState = Object.assign({}, this.state);
    this._toggleExpand = this._toggleExpand.bind(this);
  }

  /**
   * @override React.Component
   */
  render(): JSX.Element {
    const { appRoute, classes, treeLv } = this.props;

    // If not an AppLink tree leaf, then we must have Collapse element for children AppLinks.
    let expandArrowElem: JSX.Element = null;
    let collapseElem: JSX.Element = null;
    if (appRoute.children) {
      const nextTreeLv: number = (treeLv == null ? 1 : treeLv + 1);
      expandArrowElem = (this.state.expanded ? <ExpandLess /> : <ExpandMore />);
      collapseElem = (
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {appRoute.children.map((childAppRoute: AppRoute) => <AppLink appRoute={childAppRoute} treeLv={nextTreeLv} classes={classes} key={appRoute.label} />)}
          </List>
        </Collapse>
      );
    }

    let treeLvPad: JSX.Element[];
    if (treeLv > 0) {
      treeLvPad = [];
      for (let i = 0; i < treeLv; i++) {
        treeLvPad.push(<span className={classes.treeLvPad} key={'treeLvPad-' + i}/>);
      }
    }

    return (
      <div key={appRoute.label}>
        <ListItem button onClick={appRoute.children ? this._toggleExpand : appRoute.reroute}>
          {treeLvPad}
          {appRoute.icon ? <ListItemIcon className={classes.navIcon}>{appRoute.icon}</ListItemIcon> : null}
          <ListItemText primary={appRoute.label} />
          {expandArrowElem}
        </ListItem>
        {collapseElem}
      </div>
    );
  }

  private _toggleExpand(): void {
    this._tempState.expanded = !this._tempState.expanded;
    this.setState(this._tempState);
  }
}

export default withStyles(styles.appLinkTheme, { withTheme: true })(AppLink);
