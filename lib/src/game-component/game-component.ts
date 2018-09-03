import { Observable } from 'rxjs';

/**
 * Represents an object or entity within a Game Scene.
 */
export abstract class GameComponent {

  private static _nextId = 0;

  constructor(
    public id: string = ( '' + GameComponent._nextId++ )
  ) {}

  abstract init(id?: string): Observable<void>;

  abstract update(): void;

  abstract render(canvasCtx: CanvasRenderingContext2D, canvasRect: ClientRect, interpAmt: number): void;
}
