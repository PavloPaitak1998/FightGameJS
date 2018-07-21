import { Fighter } from "./fighter";
import { ImprovedFighter } from "./improvedFighter";
import { fight } from "./fight";

// create two instances
var fighter = new Fighter("Fighter", 100, 3);
var improvedFighter = new ImprovedFighter("improvedFighter", 100, 3);
// call fight function
fight(fighter, improvedFighter, 25, 13, 45);
