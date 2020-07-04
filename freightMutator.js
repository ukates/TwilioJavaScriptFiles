// JavaScript source code
function mutate(contents) {
    return contents.map(item => item.toUpperCase()); 
}

const cargo = ['apples', 'ray guns', 'oranges'];

const mutatedCargo = mutate(cargo);
console.log(mutatedCargo); 