class Square {
    constructor(side) {
        this.side = side;
    }

    perimeter() {
        return this.side * 4;
    }

    area() {
        return this.side ** 2;
    }

    diagonal() {
        return Math.sqrt(2 * this.side ** 2);
    }

    describe() {
        return `Square with side ${this.side} has perimeter of ${this.perimeter()}, 
                area of ${this.area()}, and diagonal of ${this.diagonal().toFixed(3)}.`;
    }
}

const square1 = new Square(2);
const square2 = new Square(5);
const square3 = new Square(7);

document.addEventListener("DOMContentLoaded", () => {
    const outputDiv = document.getElementById("output");

    const squares = [square1, square2, square3];

    squares.forEach((square, index) => {
        let squareInfo = document.createElement("p");
        squareInfo.classList.add("square-info");
        squareInfo.textContent = `Square ${index + 1}: ${square.describe()}`;
        outputDiv.appendChild(squareInfo);
    });
});
