// Déclarer une variable qui est un tableau
// de prénoms (const déclaration de variable)
const names = ['Romain', 'Safa', 'Aymen'];

function hello(name) {
  return `Hello ${name.toUpperCase()}`; // Alt-Gr + 7 => backquote
}

for (const n of names) {
  console.log(hello(n));
}
