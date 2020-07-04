// JavaScript source code
function addFirstToLast(strArray) {
    if (strArray.length < 2) {
        return strArray + strArray;
    } else {
        return strArray[0] + strArray[strArray.length - 1]; 
    }
}
