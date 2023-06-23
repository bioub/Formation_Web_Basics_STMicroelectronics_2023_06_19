setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1000);
setTimeout(() => console.log('D'), 500);

console.log('E');

// Question, à votre avis dans quel ordre s'affiche les lettres
// Réponse 1 - A B C D E
// Réponse 2 - E B A D C
// Réponse 3 - B E A D C


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
