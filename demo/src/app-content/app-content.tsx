import * as React from 'react';
import { Switch, Route } from 'react-router';
import './app-content.css';
import { Home } from '../home-component/home';
import { FlappyBird } from '../flappy-bird/flappy-bird';

export class AppContent extends React.Component {

  /**
   * @override React.Component
   */
  render(): JSX.Element {
    return (
      <div className="app-content container">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/flappy-bird' component={FlappyBird}/>
        </Switch>
      </div>
    );
  }
}
