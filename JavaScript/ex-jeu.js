// import d'APIs de Node.js
// (dans le navigateur process et readline n'existent pas)
const { stdin, stdout } = require('process');
const readline = require('readline');

// configure readline (qui lit une ligne)
// pour qu'il lise la ligne sur le clavier (stdin) et afficher
// les questions dans le terminal (stdout)
const rl = readline.createInterface({
  input: stdin,
  output: stdout
});

function jouer() {
  // pose une question, le callback est asynchrone
  rl.question('Quel est le nombre ? ', (answer) => {
    // answer est de type string, TODO le convertir en number
    console.log('Vous avez saisi : ' + answer);

    // repose la même la question
    jouer();

    // arrête la partie
    // rl.close();
  });
}

jouer();
