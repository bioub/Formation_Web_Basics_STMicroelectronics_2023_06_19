// un object (exemple process)
// peut contenir des propriétés (valeurs)
// exemple argv dans process = les arguments passés en ligne de commande
console.log(process.argv);
/*
[
  '/Users/romain/.nvm/versions/node/v16.19.0/bin/node',
  '/Users/romain/Desktop/Web-Basics/JavaScript/07-object.js'
]
*/

// un object (exemple process)
// peut contenir des méthodes (fonctions)
console.log(process.cwd());
// /Users/romain/Desktop/Web-Basics/JavaScript

// Un objet regroupe des valeurs des fonctions
// dans le jargon objet : des propriétés et des méthodes

// En JavaScript une clé peut être :
// - une propriété (exemple argv)
// - une méthode (exemple cwd)

// Object.keys retournent toutes les clés (sauf exception)
console.log(Object.keys(process));

// Dans du code JS si vous voyez l'opérateur . ou []
// ce qui précède est un objet
console.log(console instanceof Object);
console.log(process instanceof Object);
console.log(Object instanceof Object);

// En JS on peut faire de l'objet sans jamais en créer
// juste en utilisant des objets existants

// Objets définis dans le langage JavaScript
console.log(Math instanceof Object);
console.log(Object instanceof Object);
console.log(Number instanceof Object);

// Objets définis dans les APIs Web
console.log(console instanceof Object);
// console.log(document instanceof Object);
// console.log(window instanceof Object);

// Objets définis dans Node.js
console.log(console instanceof Object);
console.log(process instanceof Object);
console.log(module instanceof Object);
console.log(exports instanceof Object);
