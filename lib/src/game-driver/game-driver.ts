import { GameStateManager } from '../game-state/game-state-manager';

export class GameDriver {

  private _gameStateManager = GameStateManager.getInstance();
  private _lastTimestamp = 0;
  private _lastRender = 0;
  private _lag = 0;
  private readonly _msPerUpdt = 10;

  /**
   * Runs a fixed timestep game loop.
   * @param timestamp The elapsed time (milliseconds) since the start of the application.
   */
  run(timestamp: number): void {
    const elapsed: number = ( timestamp - this._lastTimestamp );
    const elapsedRender: number = ( timestamp - this._lastRender );
    const maxFPS: number = ( this._gameStateManager.maxFps ? this._gameStateManager.maxFps : 1000 );
    const msPerRender: number = ( 1000 / maxFPS );
    const runLoopIteration: boolean = (
      !this._gameStateManager.pause &&
      this._gameStateManager.canvas != null &&
      this._gameStateManager.getActiveScene() != null
    );

    if (runLoopIteration) {
      this._lag += elapsed;

      // Fixed timestep updating.
      while (this._lag >= this._msPerUpdt) {
        this.update();
        this._lag -= this._msPerUpdt;
      }

      // Rendering using interpolation and maxFPS.
      if (elapsedRender >= msPerRender) {
        this.render(this._lag);
        this._gameStateManager.achievedFps = ( 1000 / elapsedRender );
      }
    }

    this._lastTimestamp = timestamp;
    window.requestAnimationFrame(this.run.bind(this));
  }

  update(): void {
    this._gameStateManager.getActiveScene().update();
  }

  render(interpAmt: number): void {
    const canvasCtx: CanvasRenderingContext2D = this._gameStateManager.canvas.getContext('2d');
    const canvasRect: ClientRect = this._gameStateManager.canvas.getBoundingClientRect();
    this._gameStateManager.getActiveScene().render(canvasCtx, canvasRect, interpAmt);
  }
}
