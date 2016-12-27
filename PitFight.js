var pitfight;
pitfight = {
  winner1: false,
  winner2: false,

  train: function (warrior1, warrior2) {

    warrior1_health = warrior1.getHealth();
    warrior2_health = warrior2.getHealth();

    this.resetWinner();

    while (!(this.winner1 || this.winner2)) {
      this.executeRound(warrior1,warrior2);
      this.testTrainWinner(warrior1, warrior2);
    }

    printWinner(this.winner1, warrior1.getName(), this.winner2, warrior2.getName());

    warrior1.resetHealth(warrior1_health);
    warrior2.resetHealth(warrior2_health);
  },

  figth: function (warrior1, warrior2, turns) {

    this.resetWinner();

    while ((!(this.winner1 || this.winner2)) && (turns > 0)) {
      this.executeRound(warrior1,warrior2);
      turns--;
      this.testFightWinner(warrior1, warrior2);
    }
    
    printWinner(this.winner1, warrior1.getName(), this.winner2, warrior2.getName());

    return [this.winner1,this.winner2]
  },
  executeRound: function (warrior1, warrior2) {
    warrior1.loseHealth(warrior2.getStamina());
    printLoseHealth(warrior1.getName(), warrior2.getStamina(), warrior1.getHealth());
    warrior2.loseHealth(warrior1.getStamina());
    printLoseHealth(warrior2.getName(), warrior1.getStamina(), warrior2.getHealth());
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


function createArmy (numWarriors, warriorType, stamina, health) {
  var army = [];

  $.ajax({
    url: 'https://randomuser.me/api/?results='+numWarriors,
    dataType: 'json',
    success: function(data) {
      for(var k = 0; k < numWarriors; k++){
        army.push(new warriorType(stamina, health, data.results[k].name.first));
      };
    },
    error: function(data) {
      console.log("error");
    }
  });

  return army;
}

var armyVikings = createArmy(10, Viking, 100, 300);
var armySaxons = createArmy(20, Saxon, 50, 100);


function thisIsTheWar(armyVikings,armySaxons){

  var viking;
  var saxon;
  while (armyVikings.length>0 && armySaxons.length>0) {
    viking = _getWarriorRamdom(armyVikings);
    saxon = _getWarriorRamdom(armySaxons);

    var fightResult = pitfight.figth(viking[0], saxon[0], 5);

    !fightResult[0] ? armyVikings.splice(viking[1], 1) : null;
    !fightResult[1] ? armySaxons.splice(saxon[1], 1) : null;

  }
  printWarResult(armyVikings, armySaxons);
}

function _getWarriorRamdom(army){
  var position = Math.floor((Math.random() * army.length) + 1)-1;
  var warrior = army[position];

  return [warrior, position]; 
}

function startWar() {
  thisIsTheWar(armyVikings,armySaxons)
}



