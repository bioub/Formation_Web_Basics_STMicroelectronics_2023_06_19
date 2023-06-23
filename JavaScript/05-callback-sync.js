['A', 'B'].forEach((letter) => {
  console.log(letter)
});

// du code synchrone s'exécute tout de suite
// si l'opération est longue le thread est bloqué

// pile d'appels
// ^
// |
// |[=>    ][=>    ]
// |[forEach       ]
// +------------------------------------------> temps

// Concrètement le code synchrone s'exécute dans la même pile d'appel
// Les callbacks sont plutôt rares (au niveau du langage JS uniquement sur les tableaux)
