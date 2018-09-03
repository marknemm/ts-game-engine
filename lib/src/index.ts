import { GameDriver } from './game-driver/game-driver';

export * from './game-state/game-state-manager';
export * from './game-scene/game-scene';
export * from './game-component/game-component';

const driver = new GameDriver();
window.requestAnimationFrame(driver.run.bind(driver));
