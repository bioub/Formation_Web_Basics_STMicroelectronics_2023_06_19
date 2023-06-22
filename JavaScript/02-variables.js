// 2 façons recommandées de déclarer ses varaibles

// en priorité const
const names = ['Romain', 'Safa', 'Aymen'];
names.push('Nawres');
console.log(names); // [ 'Romain', 'Safa', 'Aymen', 'Nawres' ]

// const empeche les affections, pas d'opérateurs :
// = += -= ++ --
// names = []; TypeError: Assignment to constant variable.

// Si besoin d'un de ces opérateurs on utilisera let
let prenom = 'Romain';
prenom = 'Safa';
console.log(prenom);
