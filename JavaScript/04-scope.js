globalThis.globalVar = 'globalVar';

// fileVar peut être :
// - globale dans le navigateur si <script src="fichier.js">
// - locale au fichier (portée de module) dans le navigateur si <script src="fichier.js" type="module">
// - locale au fichier dans Node.js quoiqu'il arrive
const fileVar = 'fileVar';

function externe() {
  const closureVar = 'closureVar';

  function interne() {
    const localVar = 'localVar';
    if (true) {
      const blockVar = 'blockVar';
      console.log(blockVar);
      console.log(localVar);
      console.log(closureVar);
      console.log(fileVar);
    }
    // console.log(blockVar); ReferenceError: blockVar is not defined
  }

  // console.log(localVar); ReferenceError: localVar is not defined

  interne();
}

externe();
