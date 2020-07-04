// JavaScript source code
function calculateMass(cargo) {
    return cargo.reduce((total, current) => total + current.length, 0);
}
const cargo = ['cat', 'dog', 'bird'];

const mass = calculateMass(cargo);
console.log(mass); 