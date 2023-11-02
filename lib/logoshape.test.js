const Shape = require('./Shape');

describe('Shape', () => {
    describe('color validation', () => {
        it('should accept a valid hex color', () => {
            const hexColor = '#fff';
            const shape = new Shape(hexColor);
            expect(shape.color).toBe(hexColor);
        });

        it('should accept a valid hex color with six digits', () => {
            const hexColor = '#ffffff';
            const shape = new Shape(hexColor);
            expect(shape.color).toBe(hexColor);
        });

        it('should accept a valid color keyword', () => {
            const keywordColor = 'blue';
            const shape = new Shape(keywordColor);
            expect(shape.color).toBe(keywordColor);
        });

        it('should throw an error for invalid hex color', () => {
            const invalidHexColor = '#ggg';
            expect(() => new Shape(invalidHexColor)).toThrow('Invalid color format');
        });

        it('should throw an error for invalid color keyword', () => {
            const invalidKeywordColor = 'blu';
            expect(() => new Shape(invalidKeywordColor)).toThrow('Invalid color format');
        });
    });
});