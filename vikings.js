//Clase base
var Warrior = function (stamina, health) {
  this.stamina = stamina;
  this.health = health;
};

Warrior.prototype.loseHealth = function (damage) {
  this.health = this.health - damage;
};

Warrior.prototype.getStamina = function () {
  return this.stamina;
};

Warrior.prototype.getHealth = function () {
  return this.health;
};

//Expecialización Viking - Añade el nombre
var Viking = function (name, stamina, health) {
  Warrior.call(this, stamina, health);
  this.name = name;
};

Viking.prototype = Object.create(Warrior.prototype);

Viking.prototype.constructor = Viking;

Viking.prototype.getName = function () {
  return this.name;
};

Viking.prototype.resetHealth = function (health) {
  this.health = health;
};

//Expecialización Sajón - No añade nada nuevo

var Saxon = function (stamina, health) {
  Warrior.call(this, stamina, health);
};

Saxon.prototype = Object.create(Warrior.prototype);

Saxon.prototype.constructor = Saxon;

Saxon.prototype.getName = function () {
  return "NADIE";
};