// JavaScript source code
function scan(freightItems) {
    let output = new Array(0); 
    freightItems.forEach((item, index) => {
        if (item == "contraband") {
            output.push(index);  
        }
    });
    return output; 
}

console.log(scan(['contraband', 'apples', 'cats', 'contraband', 'contraband']));