const LogoText = require("./LogoText")
describe("LogoText", () => {
    describe("text length", () => {
        it("should throw an error if the logo text is greater than 3 characters", () => {
            const LongText = () => new LogoText('ABCD');
            expect(LongText).toThrowError("Error: logo text must be max 3 characters long try again");
        });
        it("should not throw an error if the logo text is 3 characters or less", () => {
            const ShortText = () => new LogoText('ABC');
            expect(ShortText).not.toThrow();
        });
    });
    describe("color validation", ()=> {
        it("should throw an error if the colour is not a valid hex or keyword", () => {
            // Testing with an invalid colour
            const createLogoWithInvalidColor = () => new LogoText('123', '12345g');
            const hexErr = new Error('Error: colour input must be a valid hex or keyword');
            expect(createLogoWithInvalidColor).toThrowError(hexErr);
        });

        it("should not throw an error if the colour is a valid hex", () => {
            // Testing with a valid hex colour
            const createLogoWithHex = () => new LogoText('123', '#123');
            expect(createLogoWithHex).not.toThrow();
        });

        it("should not throw an error if the color is a valid keyword", () => {
            // Testing with a valid keyword colour
            const createLogoWithKeyword = () => new LogoText('123', 'blue');
            expect(createLogoWithKeyword).not.toThrow();
        });
    });
})