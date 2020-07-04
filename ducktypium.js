// JavaScript source code
class Ducktypium {
    calibrationSequence = new Array(0); 
    color = ''; 
    constructor(color) {
        if ((color == 'red') || (color == 'yellow') || (color == 'blue')) {
            this.color = color;
        }
        else {
            throw new Error("Wrong Color");
        }
    }
    refract(color) {
        if ((color == 'red') || (color == 'yellow') || (color == 'blue')) {
            if (this.color == color) {
                return color;
            }
            else if (color == 'red' && this.color == 'blue') {
                return 'purple';
            }
            else if (color == 'red' && this.color == 'yellow') {
                return 'orange';
            }
            else if (color == 'blue' && this.color == 'red') {
                return 'purple';
            }
            else if (color == 'yellow' && this.color == 'red') {
                return 'orange';
            }
            else if (color == 'yellow' && this.color == 'blue') {
                return 'green'; 
            }
            else if (color == 'blue' && this.color == 'yellow') {
                return 'green'; 
            }
        }
        else {
            throw new Error("Still Wrong Color"); 
        }
    }
    
    calibrate(numbers) {
        numbers.sort(function (a, b) { return a - b });
        this.calibrationSequence = numbers.map(item => item * 3); 
    }
}

const dt = new Ducktypium('red');

console.log(dt.color); // prints 'red'

console.log(dt.refract('blue')); // prints 'purple'
console.log(dt.refract('red')); // prints 'red'

dt.calibrate([3, 5, 1]);

console.log(dt.calibrationSequence); // prints [3, 9, 15]