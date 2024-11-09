import Square from './Square.js';

 class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b;
    }

    static help() {
        console.log("A rectangle is a quadrilateral with opposite sides equal and all angles at 90 degrees.");
    }

    length() {
        return 2 * (this.a + this.b);
    }

    square() {
        return this.a * this.b;
    }

    info() {
        console.log(`Rectangle characteristics:
- Side lengths: ${this.a}, ${this.b} (2 times each)
- Angles: 90 degrees each
- Perimeter: ${this.length()}
- Area: ${this.square()}`);
    }
}

export default Rectangle;
