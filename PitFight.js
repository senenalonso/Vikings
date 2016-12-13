var pitfight;
pitfight = {
  winner1: false,
  winner2: false,
  nameWarrior1: "",
  nameWarrior2: "",

  train: function (warrior1, warrior2) {

    warrior1_health = warrior1.getHealth();
    warrior2_health = warrior2.getHealth();

    nameWarrior1 = warrior1.getName();
    nameWarrior2 = warrior2.getName();

    this.resetWinner();

    while (!(this.winner1 || this.winner2)) {

      warrior1.loseHealth(warrior2.getStamina());
      console.log("El guerrero " + warrior1.getName() + " pierde " + warrior2.getStamina() + " puntos de vida. Le quedan " + warrior1.getHealth());

      warrior2.loseHealth(warrior1.getStamina());
      console.log("El guerrero " + warrior2.getName() + " pierde " + warrior1.getStamina() + " puntos de vida. Le quedan " + warrior2.getHealth());

      this.testTrainWinner(warrior1, warrior2);

    }

    if (this.winner1 && this.winner2)
      console.log("Los guerreros han empatado");
    else if (this.winner1)
      console.log("El guerrero " + warrior1.getName() + " ha ganado el entrenamiento");
    else
      console.log("El guerrero " + warrior2.getName() + " ha ganado el entrenamiento");

    warrior1.resetHealth(warrior1_health);
    warrior2.resetHealth(warrior2_health);
  },
  figth: function (warrior1, warrior2, turns) {

    nameWarrior1 = warrior1.getName();
    nameWarrior2 = warrior2.getName();

    this.resetWinner();

    while ((!(this.winner1 || this.winner2)) && (turns > 0)) {
      warrior1.loseHealth(warrior2.getStamina());
      console.log("El guerrero " + nameWarrior1 + " pierde " + warrior2.getStamina() + " puntos de vida. Le quedan " + warrior1.getHealth());
      warrior2.loseHealth(warrior1.getStamina());
      console.log("El guerrero " + nameWarrior2 + " pierde " + warrior1.getStamina() + " puntos de vida. Le quedan " + warrior2.getHealth());
      turns--;

      this.testFightWinner(warrior1, warrior2);
    }

    if (this.winner1 && this.winner2)
      console.log("Los dos guerreros han muerto");
    else if (this.winner1)
      console.log("El guerrero " + nameWarrior1 + " ha ganado el entrenamiento");
    else if (this.winner2)
      console.log("El guerrero " + nameWarrior2 || "Saxon" + " ha ganado el entrenamiento");
    else
      console.log("Los dos guerreros han sobrevivido");
  },
  testTrainWinner: function (warrior1, warrior2) {
    this.winner1 = warrior1.getStamina() > warrior2.getHealth();
    this.winner2 = warrior2.getStamina() > warrior1.getHealth();
  },
  testFightWinner: function (warrior1, warrior2) {
    this.winner1 = warrior2.getHealth() <= 0;
    this.winner2 = warrior1.getHealth() <= 0;
  },
  resetWinner: function () {
    this.winner1 = false;
    this.winner2 = false;
  }
};