// un object (exemple process)
// peut contenir des propriétés (valeurs)
// exemple argv dans process = les arguments passés en ligne de commande
console.log(process.argv);
console.log(process.env);
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
// Object.defineProperty

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

// L'opérateur [] est une alternative à l'opérateur .
// Mais beaucoup plus dynamique
console['log'](process['argv']);
// Permet aussi d'accéder à des clés qui contiennent des caractères spéciaux . [] : ,

const consoleMethod = 'log';
const processProp = 'argv';
console[consoleMethod](process[processProp]);

// Boucle for .. in, permet de boucler sur les clés
for (const key in process) {
  // permet de limiter aux propriétés
  if (Object.hasOwnProperty.call(process, key)) {
    const value = process[key];
    console.log(key, value);
  }
}

// JSON : JavaScript Object Notation
// Sérialisation d'un objet (une chaine qui représente un objet)

const moduleJson = JSON.stringify(module);
console.log(moduleJson);
console.log(typeof moduleJson); // string

const objectFromJson = JSON.parse(moduleJson);
console.log(objectFromJson.path); // /Users/romain/Desktop/Web-Basics/JavaScript

// 2 façons de créer un objet :

// Object literal
// Syntaxe qui permet directement de créer l'objet
const coordsA = {
  x: 1,
  y: 2,
  compute() {
    return 'compute called';
  },
};
console.log(typeof coordsA); // object

console.log(coordsA.x);
console.log(coordsA.y);
console.log(coordsA["y"]);

// On peut étendre un objet
// c'est à dire ajouter des clés/valeurs après sa création
// Extensibilité de l'objet
coordsA.z = 3; // ajout
coordsA.z = 4; // modification
delete coordsA.z; // suppression
console.log(coordsA);

// Même un objet qu'on a pas créé est extensible (MAUVAISE PRATIQUE)
delete Math.random;
delete process.argv;
console.log(Math.random);
console.log(process.argv);

const coordsB = {
  x: 3,
  y: 4,
  compute() {
    return 'compute called';
  },
};

console.log(coordsA.compute() === coordsB.compute()); // true
console.log(coordsA.compute === coordsB.compute); // false (2 fonctions identiques en mémoire)

// Les 2 inconvénients de Object Literal
// - la création n'est pas factorisée (comme avec une fonction ou une classe)
// - les méthodes sont dupliquées (problème mémoire/perf)

// Constructor (fonction constructeur)
// Syntaxe historique
// function User(name) {
//   this.name = name;
// }
// User.prototype.hello = function() {
//   return `Hello my name is ${this.name}`
// };

// Syntaxe moderne
class User {
  constructor(name) {
    this.name = name;
  }
  hello() {
    return `Hello my name is ${this.name}`;
  }
}

// une classe est une fonction constructeur déguisée
// (sucre syntaxique)
console.log(typeof User); // function
console.log(typeof User.prototype.hello); // function

const userA = new User('romain');
const userB = new User('toto');
console.log(typeof userA); // object

// y compris avec classe, aucune garantie qu'une clé existe
// delete userA.name;

console.log(userA.name);
console.log(userB.name);
console.log(userA.hello());

// Quand on utilise l'opérateur . ou []
// JS va faire plusieurs recherche jusqu'à trouver une valeur
// 1/ regarde dans l'objet et trouve (exemple userA.name)
// 2/ regarde dans le prototype du constructeur (exemple User.prototype.hello)
// 3/ regarde dans les prototypes chainés (simule l'héritage)
// 4/ retourne undefined
