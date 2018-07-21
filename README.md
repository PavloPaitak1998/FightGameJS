# FightGameJS
Create a "Fight" game in which there will be two types of players: fighter and improved fighter.

### Create a Fighter class. The class is supposed to accept the meaning of name, power and health. Also, the class must have "setDamage", "hit" and "knockout" methods.

* The setDamage method takes the value of "damage" and inflicts damage by changing the value of health (health = health-damage) and displays the "health:" string.

* The "hit" method takes the meaning of "enemy", "point", and in the middle calls the method of the transferred object "enemy.setDamage (damage)". "Damage" is calculated as follows: damage = point * power, where point is the variable parameter adopted in the "fight" function, power is the property of the object that is causing damage.

* The "knockout" method returns a resolve that takes half a second (for this, use the setTimeout function inside the spacewriter, which in half a second causes the resolve function), and then output it to the "time is over" console.

### Create a ImprovedFighter class that will be inherited from the Fighter class with its properties and methods.

* For this class, create a doubleHit method that will call the imbedded "hit" method and pass there the double value of "point".

* From both classes, generate an instance of fighter, improvedFighter.

### Create an asynchronous battle function that will accept the parameters - fighter, improvedFighter, and point.

* fight can take arbitrary number of parameters. For example, fight (fighter, improvedFighter, 25, 13, 45), where point = [25, 13, 45].

* This function will start the game process: the players alternately hit each other using the hit method that takes the corresponding point. If one of the players end up in health, then he gets into a knockout (display the corresponding message in the console and call the method "knockout"), respectively, in half a second the game ends and the result is displayed on the screen.

* When performing the task you must use: block scoping (let) - spread / rest operator - default parameters - string interpolation - arrow functions - classes + inheritance + super, async / wait, promise.

### Have fan )
