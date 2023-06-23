setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1000);
setTimeout(() => console.log('D'), 500);

console.log('E');

// Question, à votre avis dans quel ordre s'affiche les lettres
// Réponse 1 - A B C D E
// Réponse 2 - E B A D C
// Réponse 3 - B E A D C
// Réponse 4 - E B D A C


// du code asynchrone s'exécute plus tard
// si l'opération est longue le thread est disponible

// pile d'appels
// ^
// |
// |                          [lg   ]          [lg   ][lg   ]          [lg   ]
// |[st][st][st][st][lg] ⟳    [taskB] ⟳        [taskA][taskD] ⟳        [taskC]
// +----0---------------------5----------------500----------------------1000--------> temps
//                   E        B                A      D                 C

// coté C++, la plateforme (le navigateur ou Node.js par ex) exécute
// le JS dans une boucle
// cette boucle ressemble à :
// do {
//   executeJs()
// } while(callbackInQueue);

// File d'attente (0ms) : taskB
// File d'attente (5ms) :
// File d'attente (500ms) : taskA - taskD
// File d'attente (501ms) : taskD
// File d'attente (502ms) :
// File d'attente (1000ms) : taskC
// File d'attente (1001ms) :

// Attention en pratique si j'appelle plusieurs fonction async
// en même temps, je ne sais pas dans quel ordre les callbacks vont s'exécuter
// (setTimeout un cas particulier)
// fs.readFile('file1.txt', (err, data) => console.log('file1.txt read'));
// fs.readFile('file2.txt', (err, data) => console.log('file2.txt read'));
// fetch('url1').then((res) => console.log('réponse 1'));
// fetch('url2').then((res) => console.log('réponse 2'));
// btn1.addEventListener('click', () => console.log('click btn1'));
// btn2.addEventListener('click', () => console.log('click btn2'));
// console.log('FIN');
