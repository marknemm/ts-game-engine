import * as React from 'react';
import { withStyles, StyledComponentProps, Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import * as styles from './flappy-bird.style';
import { GameStateManager } from '../../../../lib/src/index';
import { FlappyBirdScene } from '../../flappy-bird-game/flappy-bird-scene';

class FlappyBird extends React.Component<StyledComponentProps> {

  private _canvasRef: React.RefObject<HTMLCanvasElement>;
  private _gameStateManager: GameStateManager;

  constructor(props: StyledComponentProps) {
    super(props);
    this._canvasRef = React.createRef();
  }

  /**
   * @override React.Component
   */
  componentDidMount(): void {
    if (this._canvasRef.current !== null) {
      const canvas: HTMLCanvasElement = this._canvasRef.current;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      this._gameStateManager = GameStateManager.getInstance(canvas);

      const flappyBirdScene = new FlappyBirdScene();
      this._gameStateManager.registerScene(flappyBirdScene);
      this._gameStateManager.setActiveScene(flappyBirdScene.id).subscribe();
    }
  }

  /**
   * @override React.Component
   */
  render(): JSX.Element {
    const { classes } = this.props;

    return (
      <Card>
        <CardHeader title="Flappy Bird" />
        <CardContent>
          <canvas ref={this._canvasRef} className={classes.canvas} />
          <Typography variant="title"><p>Description:</p></Typography>
          <p>
            Flappy Bird is a sidescroller where the player controls a bird and attempts to navigate it between obstacles without hitting them.
          </p>
          <Typography variant="title"><p>Controls:</p></Typography>
          <ul>
            <li><b>Ascend</b>: &uarr;</li>
            <li><b>Pause</b>: P</li>
          </ul>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles.flappyBirdTheme, { withTheme: true })(FlappyBird);
