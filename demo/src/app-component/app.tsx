import * as React from 'react';
import { Drawer, AppBar, MenuItem, IconButton } from 'material-ui';
import './app.css';
import { AppContent } from '../app-content/app-content';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

interface IAppState {
  drawerOpen: boolean;
  subTitle: string;
}

class AppNoRouter extends React.Component<RouteComponentProps<any>, IAppState> {

  private readonly _tempState: IAppState;

  constructor(props: RouteComponentProps<any>) {
    super(props);
    this.state = {
      drawerOpen: false,
      subTitle: this._getSubTitle()
    };
    this._tempState = Object.assign({}, this.state);
    this._toggleDrawer = this._toggleDrawer.bind(this);
    this._closeDrawer = this._closeDrawer.bind(this);
  }

  componentDidUpdate(prevProps: RouteComponentProps<any>) {
    if (prevProps.location !== this.props.location) {
      this._tempState.subTitle = this._getSubTitle();
      this._tempState.drawerOpen = false;
      this.setState(this._tempState);
    }
  }

  /**
   * @override React.Component
   */
  render(): JSX.Element {
    return (
      <div className="app-container">
        <AppBar title={'Game Demos - ' + this.state.subTitle} onLeftIconButtonClick={this._toggleDrawer}/>
        <Drawer open={this.state.drawerOpen}>
          <AppBar title="Game Demos" iconElementLeft={<div/>} iconElementRight={<IconButton iconClassName="material-icons" onClick={this._toggleDrawer}>close</IconButton>}/>
          <Link to="/"><MenuItem>Home</MenuItem></Link>
          <Link to="/flappy-bird"><MenuItem>Flappy Bird</MenuItem></Link>
        </Drawer>
        <div className="app-content-container" onClick={this._closeDrawer}>
          <AppContent/>
        </div>
      </div>
    );
  }

  private _getSubTitle(): string {
    switch (this.props.location.pathname) {
      case '/flappy-bird':
        return 'Flappy Bird';
      default:
        return 'Home';
    }
  }

  private _toggleDrawer(): void {
    this._tempState.drawerOpen = !this.state.drawerOpen;
    this.setState(this._tempState);
  }

  private _closeDrawer(): void {
    if (this._tempState.drawerOpen) {
      this._tempState.drawerOpen = false;
      this.setState(this._tempState);
    }
  }
}

export const App = withRouter(AppNoRouter);
