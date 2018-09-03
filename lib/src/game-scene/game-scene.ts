import { map } from 'rxjs/operators';
import { Observable, forkJoin } from 'rxjs';

import { GameComponent } from '../game-component/game-component';

/**
 * Represents an isolated loadable area or stage of the game.
 */
export abstract class GameScene {

  private static _nextId = 0;
  protected readonly _components: { [componentId: string]: GameComponent } = {};

  constructor(
    public id: string = ( '' + GameScene._nextId++ )
  ) {}

  addComponent(component: GameComponent): void {
    this._components[component.id] = component;
  }

  removeComponent(componentId: string): void {
    this._components[componentId] = undefined;
  }

  getComponent(componentId: string): GameComponent {
    return this._components[componentId];
  }

  init(): Observable<void> {
    const componentInitObs: Observable<void>[] = [];

    for (const componentProp in this._components) {
      if (this._components.hasOwnProperty(componentProp)) {
        componentInitObs.push(this._components[componentProp].init());
      }
    }

    return forkJoin(componentInitObs).pipe(map(() => {}));
  }

  update(): void {
    for (const componentProp in this._components) {
      if (this._components.hasOwnProperty(componentProp)) {
        this._components[componentProp].update();
      }
    }
  }

  render(canvasCtx: CanvasRenderingContext2D, canvasRect: ClientRect, interpAmt: number): void {
    // Clear out all previous render artifacts.
    canvasCtx.strokeStyle = 'black';
    canvasCtx.fillRect(0, 0, canvasRect.width, canvasRect.height);

    for (const componentProp in this._components) {
      if (this._components.hasOwnProperty(componentProp)) {
        this._components[componentProp].render(canvasCtx, canvasRect, interpAmt);
      }
    }
  }
}
