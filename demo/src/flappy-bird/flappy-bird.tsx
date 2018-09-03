import * as React from 'react';
import { GameStateManager } from '../../../lib/src/index';
import { FlappyBirdScene } from './flappy-bird-game/flappy-bird-scene';

export class FlappyBird extends React.Component {

  private _canvasRef: React.RefObject<HTMLCanvasElement>;
  private _gameStateManager: GameStateManager;

  constructor(props: Readonly<{}>) {
    super(props);
    this._canvasRef = React.createRef();
  }

  /**
   * @override React.Component
   */
  componentDidMount(): void {
    if (this._canvasRef.current !== null) {
      const canvas: HTMLCanvasElement = this._canvasRef.current;
      canvas.style.width = '100%';
      canvas.style.height = '500px';
      canvas.style.marginTop = '50px';
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
    return <canvas ref={this._canvasRef}/>;
  }
}
