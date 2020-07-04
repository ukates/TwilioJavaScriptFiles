// JavaScript source code
class Materializer {
    activated = false; 
    constructor(target) {
        this.target = target;
    }
    activate() {
        this.activated = true; 
    }
    materialize() {
        if (this.activated) return this.target; 
    }
}