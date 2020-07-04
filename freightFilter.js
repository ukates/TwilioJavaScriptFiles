// JavaScript source code
function scanAndFilter(cargo, contraband) {
    let filteredOutput = new Array(0); 
    cargo.forEach (item => {
        if (item != contraband) {
            filteredOutput.push(item); 
        }
    });
    return filteredOutput; 
}
console.log(scanAndFilter(['apples', 'ray guns', 'oranges', 'tacos', 'ray guns'], 'ray guns'));