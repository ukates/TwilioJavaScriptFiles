// JavaScript source code
function getFirstAmountSorted(arr, num) {
    arr.sort(); 
    let newArray = arr.slice(0, num);
    return newArray; 
}