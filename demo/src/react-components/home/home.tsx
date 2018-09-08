import * as React from 'react';
import { withStyles, StyledComponentProps, Card, CardContent, CardHeader } from '@material-ui/core';
import * as styles from './home.style';

class Home extends React.Component<StyledComponentProps> {

  /**
   * @override React.Component
   */
  render(): JSX.Element {
    return (
      <Card>
        <CardHeader title="TS Game Engine" />
        <CardContent>
          <p>Welcome to the <b>TS Game Engine demo</b>. The TS Game Engine is a simple 2D game engine written primarily in Typescript.</p>
          <p>
            All game demos can be found under the <b>Games</b> navigation tab.
            All documentation for developer use can be found under the <b>Documentation</b> navigation tab.
          </p>
          <p>
            The github page for the engine can be found <a href="https://github.com/marknemm/ts-game-engine" target="_blank">here</a>.
            Please feel free to submit any bugs at the <a href="https://github.com/marknemm/ts-game-engine/issues" target="_blank">Issues</a> github page.
          </p>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles.homeTheme, { withTheme: true })(Home);
