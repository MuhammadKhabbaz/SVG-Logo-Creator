class Shape {
    constructor(color) {
        if (!this.isValidColor(color)) {
            throw new Error('Invalid color format.');
        }
        this.color = color;
    }

    // Method to validate color
    isValidColor(color) {
        const hexRegex = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
        const keywordRegex = /^[a-zA-Z]+$/;
        return hexRegex.test(color) || keywordRegex.test(color);
    }

    // Method to convert shape to SVG string
    toSVG() {
        throw new Error('You must implement this method in derived classes.');
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius || 50; // default radius
    }

    toSVG() {
        return `<circle cx="100" cy="100" r="${this.radius}" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    constructor(color, sideLength) {
        super(color);
        this.sideLength = sideLength || 100; // default side length
    }

    toSVG() {
        return `<rect x="50" y="50" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    constructor(color, size) {
        super(color);
        this.size = size || 100; // default size for the triangle
    }

    toSVG() {
        const halfSize = this.size / 2;
        return `<polygon points="${halfSize},0 0,${this.size} ${this.size},${this.size}" fill="${this.color}" />`;
    }
}

module.exports = {
    Shape,
    Circle,
    Square,
    Triangle
};