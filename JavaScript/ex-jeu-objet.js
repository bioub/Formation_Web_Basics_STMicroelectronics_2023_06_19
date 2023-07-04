// Bonne pratique moderne
// créer 4 fonctions plutôt qu'un objet
const Random = {
  getRandom() {
    return Math.random();
  },
  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  },
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  },
  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  },
};

// import d'APIs de Node.js
// (dans le navigateur process et readline n'existent pas)
const { stdin, stdout } = require("process");
const readline = require("readline");

class Jeu {
  constructor(options = {}) {
    // ?? Nullish Coalescing Operator (ES2020)
    // si la partie de gauche vaut null ou undefined
    // on active la partie de droite, sinon la partie de gauche
    const min = options.min ?? 0;
    const max = options.max ?? 100;

    this.rl = readline.createInterface({
      input: stdin,
      output: stdout,
    });
    this.entierAlea = Random.getRandomInt(min, max);
    this.essais = [];
  }
  jouer() {
    if (this.essais.length) {
      console.log(`Vous avez déjà saisi : ${this.essais.join(" - ")}`);
    }

    // pose une question, le callback est asynchrone
    this.rl.question("Quel est le nombre ? ", (answer) => {
      // answer est de type string, TODO le convertir en number
      console.log("Vous avez saisi : " + answer);

      const entierSaisi = Number.parseInt(answer, 10);

      if (Number.isNaN(entierSaisi)) {
        console.log("Erreur : il faut saisir un nombre");
        return this.jouer();
      }

      this.essais.push(entierSaisi);

      if (entierSaisi > this.entierAlea) {
        console.log("Trop grand");
        this.jouer();
      } else if (entierSaisi < this.entierAlea) {
        console.log("Trop petit");
        this.jouer();
      } else {
        console.log("Gagné");
        this.rl.close();
      }
    });
  }
}

const game = new Jeu();
game.jouer();
