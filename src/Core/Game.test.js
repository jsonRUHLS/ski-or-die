import 'babel-polyfill';
import { Game } from './Game';

jest.mock('./Game');

let game;
let mockGameInstance;

beforeEach(() => {
    Game.mockClear();
    game = new Game();
    mockGameInstance = Game.mock.instances[0];
});

it('New game has been constructed', () => {
    expect(Game).toHaveBeenCalledTimes(1);
});

// Testing that all game methods are defined and able to be invoked

it('Should call init on the game instance', () => {
    game.init();

    const mockInitGame = mockGameInstance.init;
    expect(mockInitGame).toHaveBeenCalledTimes(1);
});

it('Should load assets on the game instance', () => {
    game.load();

    const mockLoadAssets = mockGameInstance.load;
    expect(mockLoadAssets).toHaveBeenCalledTimes(1);
});

it('Should call run on the game instance', () => {
    game.run();

    const mockRunGame = mockGameInstance.run;
    expect(mockRunGame).toHaveBeenCalledTimes(1);
});

it('Should call updateGameWindow on the game instance', () => {
    game.updateGameWindow();

    const mockUpdateGame = mockGameInstance.updateGameWindow;
    expect(mockUpdateGame).toHaveBeenCalledTimes(1);
});

it('Should call drawGameWindow on the game instance', () => {
    game.drawGameWindow();

    const mockDrawGame = mockGameInstance.drawGameWindow;
    expect(mockDrawGame).toHaveBeenCalledTimes(1);
});

it('Should call calculateGameWindow on the game instance', () => {
    game.calculateGameWindow();

    const mockCalculateGame = mockGameInstance.calculateGameWindow;
    expect(mockCalculateGame).toHaveBeenCalledTimes(1);
});

it('Should call handleKeyDown on the game instance', () => {
    game.handleKeyDown();

    const mockHandleKeyDown = mockGameInstance.handleKeyDown;
    expect(mockHandleKeyDown).toHaveBeenCalledTimes(1);
});
