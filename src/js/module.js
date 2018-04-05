// export default function hello() {
//   console.log('Hello from JS Module');
// }

function hello() {
  console.log('Bonjour JS Module');
}

function quoiDe9() {
  console.log('Quoi de neuf...');
}

function isCanvas() {
    var element = document.createElement('canvas');
    return !!(element.getContext && element.getContext('2d'));
}
//const inc = (x)=>x+3;

//function capLettre(str) {
//    return str.replace(/(^|\s)[a-z]/g, x => x.toUpperCase());
//}

const capLettre = (str) => str.replace(/(^|\s)[a-z]/, x => x.toUpperCase());

export {capLettre};