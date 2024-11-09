import Rectangle from './Rectangle.js';

class Parallelogram extends Rectangle {
    constructor(a, b, alpha, beta) {
        super(a, b);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log("A parallelogram is a quadrilateral with opposite sides equal and opposite angles equal.");
    }

    length() {
        return 2 * (this.a + this.b);
    }

    square() {
        return this.a * this.b * Math.sin(this.alpha * (Math.PI / 180));
    }

    info() {
        console.log(`Parallelogram characteristics:
- Side lengths: ${this.a}, ${this.b} (2 times each)
- Angles: ${this.alpha} and ${this.beta} degrees
- Perimeter: ${this.length()}
- Area: ${this.square()}`);
    }
}

export default Parallelogram;
