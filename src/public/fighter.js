// Create class Fighter
export class Fighter {
    constructor(_name, _health, _power) {
      this.name = _name;
      this.health = _health;
      this.power = _power;
    }
  
    get health() {
      return this.health;
    }
    set health(value) {
      this.health = value;
    }
  
    get name() {
      return this.name;
    }
  
    get power() {
      return this.power;
    }
  
    setDamage(damage) {
      this.health = this.health - damage;
      console.log(this.name, " Health: ", this.health);
    }
  
    hit(enemy, point) {
      let damage = 0;
      damage = point * this.power;
      enemy.setDamage(damage);
    }
  
    knockout() {
      return new Promise((resolve, reject) => {
        console.log("Time is over !");
        setTimeout(() => {
          resolve("Resolved !");
        }, 500);
      });
    }
  }