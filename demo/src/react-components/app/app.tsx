import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { StyledComponentProps, withStyles } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import GamesIcon from '@material-ui/icons/Games';
import VideoGameAssetIcon from '@material-ui/icons/VideogameAsset';
import InsertDriveFile from '@material-ui/icons/InsertDriveFile';
import * as styles from './app.style';
import AppRoute from './app-route/app-route';
import AppHeader from './app-header/app-header';
import AppNav from './app-nav/app-nav';
import AppBody from './app-body/app-body';
import Home from '../home/home';
import FlappyBird from '../flappy-bird/flappy-bird';

interface IAppProps extends StyledComponentProps, RouteComponentProps<any> {}
interface IAppState {
  drawerOpen: boolean;
}

class App extends React.Component<IAppProps, IAppState> {

  private _tempState: IAppState;
  private _appRoutes: AppRoute[];

  constructor(props: IAppProps) {
    super(props);
    this.state = { drawerOpen: false };
    this._tempState = Object.assign({}, this.state);
    this._appRoutes = [
      new AppRoute(props, 'Home', <HomeIcon />, '/', Home),
      new AppRoute(props, 'Games', <GamesIcon />, [
        new AppRoute(props, 'Flappy Bird', <VideoGameAssetIcon />, '/flappy-bird', FlappyBird)
      ]),
      new AppRoute(props, 'Documentation', <InsertDriveFile />, [])
    ];
    this._toggleDrawer = this._toggleDrawer.bind(this);
  }

  componentDidUpdate(prevProps: RouteComponentProps<any>) {
    if (prevProps.location !== this.props.location) {
      this._tempState.drawerOpen = false;
      this.setState(this._tempState);
    }
  }

  /**
   * @override React.Component
   */
  render(): JSX.Element {
    const { classes } = this.props;

    return (
      <div className={classes.appContainer}>
        <AppHeader toggleDrawer={this._toggleDrawer} />
        <AppNav appRoutes={this._appRoutes} drawerOpen={this.state.drawerOpen} toggleDrawer={this._toggleDrawer} />
        <AppBody appRoutes={this._appRoutes} />
      </div>
    );
  }

  private _toggleDrawer(): void {
    this._tempState.drawerOpen = !this._tempState.drawerOpen;
    this.setState(this._tempState);
  }
}

export default withRouter(withStyles(styles.appTheme, { withTheme: true })(App));
