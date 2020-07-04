// JavaScript source code
function scan(freightItems) {
    let count = 0;  
    freightItems.forEach(item => {
        if (item == "contraband") {
            count++; 
        }
    }); 
    return count; 
}