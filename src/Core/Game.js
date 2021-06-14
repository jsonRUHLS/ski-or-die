import * as Constants from "../Constants";
import { AssetManager } from "./AssetManager";
import { Canvas } from './Canvas';
import { ObstacleManager } from "../Entities/Obstacles/ObstacleManager";
import { Rect } from './Utils';
import { Rhino } from "../Entities/Rhino/Rhino";
import { Skier } from "../Entities/Skier";

export class Game {
    gameWindow = null;
    yAxis;

    constructor() {
        this.assetManager = new AssetManager();
        this.canvas = new Canvas(Constants.GAME_WIDTH, Constants.GAME_HEIGHT);
        this.skier = new Skier(0, 0);
        this.createRhino();
        this.obstacleManager = new ObstacleManager();

        document.addEventListener('keydown', this.handleKeyDown.bind(this));
    }

    init() {
        this.obstacleManager.placeInitialObstacles();
    }

    async load() {
        await this.assetManager.loadAssets(Constants.ASSETS);
    }

    run() {
        this.canvas.clearCanvas();

        this.updateGameWindow();
        this.drawGameWindow();

        requestAnimationFrame(this.run.bind(this));
    }

    calculateGameWindow() {
        const skierPosition = this.skier.getPosition();
        const left = skierPosition.x - (Constants.GAME_WIDTH / 2);
        const top = skierPosition.y - (Constants.GAME_HEIGHT / 2);
        this.gameWindow = new Rect(left, top, left + Constants.GAME_WIDTH, top + Constants.GAME_HEIGHT);
    }

    createRhino() {
        setTimeout(() => {
            const skierPosition = this.skier.getPosition();
            const xAxis = skierPosition.x;
            this.yAxis = skierPosition.y - 100;
            return this.rhino = new Rhino(xAxis, this.yAxis);
        }, 5000);
    }

    drawGameWindow() {
        this.canvas.setDrawOffset(this.gameWindow.left, this.gameWindow.top);

        this.skier.draw(this.canvas, this.assetManager);
        this.obstacleManager.drawObstacles(this.canvas, this.assetManager);
    }

    handleKeyDown(event) {
        switch (event.which) {
            case Constants.KEYS.LEFT:
                this.skier.turnLeft();
                this.rhino.turnLeft();
                event.preventDefault();
                break;
            case Constants.KEYS.RIGHT:
                this.skier.turnRight();
                this.rhino.turnRight();
                event.preventDefault();
                break;
            case Constants.KEYS.UP:
                this.skier.jump();
                event.preventDefault();
                break;
            case Constants.KEYS.DOWN:
                this.skier.turnDown();
                this.rhino.turnDown();
                event.preventDefault();
                break;
        }
    }

    updateGameWindow() {
        this.skier.move();

        const previousGameWindow = this.gameWindow;
        this.calculateGameWindow();

        this.obstacleManager.placeNewObstacle(this.gameWindow, previousGameWindow);

        this.skier.checkIfSkierHitObstacle(this.obstacleManager, this.assetManager);

        if (this.rhino) {
            this.rhino.draw(this.canvas, this.assetManager);

            this.rhino.move();
            this.rhino.skierBounds = this.skier.skierBounds;
            this.rhino.updatePosition(this.assetManager);
        }
    }
}