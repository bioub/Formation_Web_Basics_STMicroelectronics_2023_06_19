const users = [
  {
    id: 1,
    name: 'Romain',
  },
  {
    id: 2,
    name: 'Houda',
  }
];

// Obtenir un tableau de names
// const names = [];
// for (const user of users) {
//   names.push(user.name);
// }

const names = users.map((user) => user.name);
