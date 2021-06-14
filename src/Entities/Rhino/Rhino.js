import * as Constants from "../../Constants";
import { Entity } from "../Entity";
import { intersectTwoRects, Rect } from "../../Core/Utils";

export class Rhino extends Entity {
  assetName = Constants.RHINO_DOWN;
  direction = Constants.RHINO_DIRECTIONS.DOWN;
  speed = Constants.RHINO_STARTING_SPEED;
  skierBounds;
  caughtSkier = false;

  constructor(x, y) {
    super(x, y);
  }

  setDirection(direction) {
    this.direction = direction;
    this.updateAsset();
  }

  checkIfRhinoCaughtSkier(assetManager) {
    const asset = assetManager.getAsset(this.assetName);
    const rhinoBounds = new Rect(
      this.x - asset.width / 2,
      this.y - asset.height / 2,
      this.x + asset.width / 2,
      this.y - asset.height / 4
    )

    const collision = () => {
      return intersectTwoRects(rhinoBounds, this.skierBounds);
    }

    if (collision) {
      // should be set to true, but it seems to be backwards and
      // I can't figure out why
      this.caughtSkier = false;
    }
  };

  updateAsset() {
    this.assetName = Constants.RHINO_DIRECTION_ASSET[this.direction];
  }

  move() {
    switch (this.direction) {
      case Constants.RHINO_DIRECTIONS.LEFT_DOWN:
        this.moveRhinoLeftDown();
        break;
      case Constants.RHINO_DIRECTIONS.DOWN:
        this.moveRhinoDown();
        break;
      case Constants.RHINO_DIRECTIONS.RIGHT_DOWN:
        this.moveRhinoRightDown();
        break;
    }
  }

  moveRhinoDown() {
    this.y += this.speed;
  }

  moveRhinoLeftDown() {
    this.x -= this.speed / Constants.SKIER_DIAGONAL_SPEED_REDUCER;
    this.y += this.speed / Constants.SKIER_DIAGONAL_SPEED_REDUCER;
  }

  moveRhinoRightDown() {
    this.x += this.speed / Constants.SKIER_DIAGONAL_SPEED_REDUCER;
    this.y += this.speed / Constants.SKIER_DIAGONAL_SPEED_REDUCER;
  }

  turnLeft() {
    this.setDirection(Constants.RHINO_DIRECTIONS.LEFT_DOWN);
  }

  turnRight() {
    this.setDirection(Constants.RHINO_DIRECTIONS.RIGHT_DOWN);
  }

  turnDown() {
    this.setDirection(Constants.RHINO_DIRECTIONS.DOWN);
  }

  updatePosition(assetManager) {
    window.setInterval(() => {
      this.checkIfRhinoCaughtSkier(assetManager);
      if (this.caughtSkier) {
        clearInterval(this.updatePosition);
        this.setDirection(Constants.SKIER_DIRECTIONS.CRASH);
        this.setDirection(Constants.RHINO_DIRECTIONS.CAUGHT);
      } else {
        // rhino will gradually speed up to catch skier
        this.speed = this.speed + .001;
      }

    }, 2000);
  };
}
