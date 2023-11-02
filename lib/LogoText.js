class LogoText {
    constructor(text, colour) {
        if (text.length > 3) {
            throw new Error("Error: logo text must be max 3 characters long try again");
        }
        

        if (!this.isValidColor(colour)) {
            throw new Error("Error: colour input must be a valid hex or keyword");
        }
        this.text = text
        this.colour = colour;
    }
    // Function to validate the colour input
    isValidColor(colour) {
        // Simple regex for hex colour (3 or 6 digits) and keyword (no digit and spaces allowed)
        const hexRegex = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
        const keywordRegex = /^[a-zA-Z]+$/;
        return hexRegex.test(colour) || keywordRegex.test(colour);
    }
    
}

module.exports = LogoText;