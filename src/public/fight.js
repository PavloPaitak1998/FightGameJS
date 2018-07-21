// create async function fight
export async function fight(fighter, improvedFighter, ...points) {
  let i = 0;
  while (fighter.health >= 0 &&
         improvedFighter.health >= 0 &&
         i < points.length  ) {
    fighter.hit(improvedFighter, points[i]);
    improvedFighter.doubleHit(fighter, points[i]);
    i++;
  }

  if (fighter.health <= 0) {
    console.log("K.O.");
    let promise = fighter.knockout();
    await promise.then(result => {
      console.log("The winner is " + improvedFighter.name + "!");
    });
  } else if (improvedFighter.health <= 0) {
    console.log("K.O.");
    let promise = improvedFighter.knockout();
    await promise.then(result => {
      console.log("The winner is" + fighter.name + " !");
    });
  } else {
    console.log("A draw !");
  }
}