// REST Operator (Array)
// ... à la déclaration de la variable
// Conversion de syntaxe :
// - en entrée : une liste de valeurs (3, 4, 5)
// - en sortie : un tableau (nbs: [3, 4, 5])
function sumWithExtraParams(a, b, ...nbs) {
  let result = a + b;

  for (const n of nbs) {
    result += n;
  }

  return result;
}

console.log(sumWithExtraParams(1, 2, 3, 4, 5)); // 15

// SPREAD Operator
// ... à la lecture de la variable
// Conversion de syntaxe :
// - en entrée : un tableau (nbs: [1, 2, 3, 4, 5])
// - en sortie : une liste de valeurs (1, 2, 3, 4, 5)
function sum(a, b, c, d, e) {
  return a + b + c + d + e;
}

const nbs = [1, 2, 3, 4, 5];
console.log(sum(...nbs)); // 15

// Souvent utilisé pour cloner des tableaux
const cloneNbs = [...nbs];

// Souvent utilisé pour manipuler les tableaux
// de façon immuable (sans toucher au tableau d'origine)
const newNbs = [...nbs, 6]; // nbs.push aurait modifié nbs


// newNbs contient [1, 2, 3, 4, 5, 6];

// Au lieu d'écrire :
// const un = newNbs[0];
// const deux = newNbs[1];
// const trois = newNbs[2];

// On peut destructurer le tableau :
// const [un, deux, trois] = nbs;

// Cumulable avec defaut et REST
//    [1 , 2   , 3        , 4, 5, 6         ]
const [un, deux, trois = 3, ...quatreCinqSix] = nbs;

const coords = { x: 1, y: 2 };
// On peut aussi destructurer un objet :
// const xValue = coords.x;
// const yValue = coords.y;

//    { x: 1     , y: 2      }
const { x: xValue, y: yValue } = coords;

// Cumulable avec defaut, REST Object, shortand prop
const { x, y, z = 0, ...others } = coords;

// REST et SPREAD peuvent s'utiliser sur des objets depuis ES2018
const cloneCoords = { ...coords };

// Souvent utilisé pour manipuler les objets
// de façon immuable (sans toucher à l'objet d'origine)

const coords3d = { ...coords, z: 3 }; // coords.z = 3 aurait modifié coords
