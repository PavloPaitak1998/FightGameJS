// Create class ImprovedFighter
import { Fighter } from "./fighter.js";

// Create class ImprovedFighter
export class ImprovedFighter extends Fighter {
  constructor(_name, _health, _power) {
    super(_name, _health, _power);
  }

  doubleHit(enemy, point) {
    let doubleDamage = 0;
    doubleDamage = 2 * point;
    this.hit(enemy, doubleDamage);
  }
}