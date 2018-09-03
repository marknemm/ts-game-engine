import { Observable } from 'rxjs';

import { GameScene } from '../game-scene/game-scene';

let gameStateManager: GameStateManager;

export class GameStateManager {

  canvas: HTMLCanvasElement = null;
  maxFps = 60;
  achievedFps = 0;
  pause = false;

  protected readonly _scenes: { [sceneId: string]: GameScene } = {};
  protected _activeSceneId: string = null;

  /**
   * Protected constructor for singleton pattern.
   */
  protected constructor() {}

  /**
   * Gets a singleton instance of the GameStateManager.
   * @param canvas Sets the instance's canvas to this given value (if not null).
   * @param maxFps Sets the instance's max FPS to this given value (if not null).
   * @return The GameStateManager singleton instance.
   */
  static getInstance(canvas?: HTMLCanvasElement, maxFps?: number): GameStateManager {
    if (!gameStateManager) {
      gameStateManager = new GameStateManager();
    }
    gameStateManager.canvas = canvas;
    gameStateManager.maxFps = ( maxFps ? maxFps : gameStateManager.maxFps );
    return gameStateManager;
  }

  registerScene(scene: GameScene): void {
    this._scenes[scene.id] = scene;
  }

  unregisterScene(sceneId: string): void {
    this._scenes[sceneId] = undefined;
  }

  getScene(sceneId: string): GameScene {
    return this._scenes[sceneId];
  }

  setActiveScene(sceneId: string): Observable<void> {
    this._activeSceneId = sceneId;
    return this._scenes[sceneId].init();
  }

  getActiveScene(): GameScene {
    return this._scenes[this._activeSceneId];
  }
}
