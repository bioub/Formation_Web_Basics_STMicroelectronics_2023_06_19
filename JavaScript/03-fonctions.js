// 4 façons (répandues) de déclarer une fonction

// function declaration
function hello(name) {
  return `Hello ${name.toUpperCase()}`;
}

// anonymous function expression (ne pas utiliser)
const sum = function(a, b) {
  return a + b;
};

['A', 'B'].forEach(function(letter) {
  console.log(letter)
});

// named function expression (ne pas utiliser)
const sub = function substraction(a, b) {
  return a - b;
};

['A', 'B'].forEach(function forEachCallback(letter) {
  console.log(letter)
});

// arrow function (ES2015)
const multi = (a, b) => a * b;

['A', 'B'].forEach((letter) => {
  console.log(letter)
});

// Un callback est une fonction que je définie mais que je n'appelle
// pas, c'est un autre code qui appelera ma fonction (ce code je ne l'ai pas écrit)


// En JS vous pouvez appeler une fonction avec :
// - n'importe quel type paramètres (pas de typage statique)
// - moins ou plus de paramètres déclarés
// En TS le comportement est différent

console.log(sum('1', '2')); // '12'
console.log(sum(1)); // revient à appeler sum(1, undefined) => 1 + undefined => NaN
console.log(sum(1, 2, 3, 4)); // 3

// les fonctions peuvent définir des valeurs par défaut
// ici si b === undefined on activera la valeur par défaut
function sumWithDefault(a, b = 0) {
  return a + b;
}

console.log(sumWithDefault(1)); // 1

// les fonctions peuvent récupérer les paramères supplémentaires
function sumWithExtraParams(a, b, ...others) {
  let result = a + b;

  for (const n of others) {
    result += n;
  }

  return result;
}

console.log(sumWithExtraParams(1, 2)); // 3
console.log(sumWithExtraParams(1, 2, 3, 4)); // 10
