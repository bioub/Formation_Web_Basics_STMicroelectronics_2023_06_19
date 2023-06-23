function getRandom() {
  return Math.random();
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

// import d'APIs de Node.js
// (dans le navigateur process et readline n'existent pas)
const { stdin, stdout } = require("process");
const readline = require("readline");

// configure readline (qui lit une ligne)
// pour qu'il lise la ligne sur le clavier (stdin) et afficher
// les questions dans le terminal (stdout)
const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});
const entierAlea = getRandomInt(0, 100);
const essais = [];

function jouer() {
  if (essais.length) {
    console.log(`Vous avez déjà saisi : ${essais.join(' - ')}`);
  }

  // pose une question, le callback est asynchrone
  rl.question("Quel est le nombre ? ", (answer) => {
    // answer est de type string, TODO le convertir en number
    console.log("Vous avez saisi : " + answer);

    const entierSaisi = Number.parseInt(answer, 10);

    if (Number.isNaN(entierSaisi)) {
      console.log('Erreur : il faut saisir un nombre');
      return jouer();
    }

    essais.push(entierSaisi);

    if (entierSaisi > entierAlea) {
      console.log("Trop grand");
      jouer();
    } else if (entierSaisi < entierAlea) {
      console.log("Trop petit");
      jouer();
    } else {
      console.log("Gagné");
      rl.close();
    }
  });
}

jouer();
