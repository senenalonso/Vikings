function printLoseHealth(name, points, life) {
	console.log("El guerrero " + name + " pierde " + points + " puntos de vida. Le quedan " + life);
}

function printDraw() {	
	console.log("Los guerreros han empatado");
}

function printDoubleDie() {	
	console.log("Los dos guerreros han muerto");
}

function printRealWinner(name) {	
	console.log("El guerrero " + name + " ha ganado el enfrentamiento");
}

function printWinner(hasWonWarrior1, nameWarrior1, hasWonWarrior2, nameWarrior2) {		
    if (!hasWonWarrior1 && !hasWonWarrior2) {
      printDoubleDie()
    } else if (hasWonWarrior1) {
			printRealWinner(nameWarrior1);
    } else if (hasWonWarrior2) {
			printRealWinner(nameWarrior2);
    } else {
    	printDraw();
    }
}

function printWarResult(army1, army2) {
	console.log("Las tropas que han sobrevivido son:");
  console.log(army1);
  console.log(army2);
  if (army1.length>0) {
  	console.log("HAN GANADO LOS VIKINGOS!!!");
  } else {
  	console.log("HAN GANADO LOS SAJONES!!!");
  }

}