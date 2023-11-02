const fs = require('fs');
const inquirer = require("inquirer");
const LogoText = require("./lib/LogoText")
const { Circle, Square, Triangle } = require('./lib/LogoShape');
const questions = [
    {
        type:"input",
        message:"What text do you want to display on your logo (3 characters max)?",
        name: "logotext"
    },
    {
        type:"input",
        message:"What color do you want your text to be (Enter color name or hexadecimal number)?",
        name: "textcolour"
    },
    {
        type:"rawlist",
        message:"what shape do you want your logo to be?",
        choices:["Circle","Square","Triangle"],
        name: "logoshape"
    },
    {
        type:"input",
        message:"What color do you want your shape to be (Enter color name or hexadecimal number)?",
        name: "shapecolour"
    },
];
function createShape(answers) {
    let shape;
    switch (answers.logoshape.toLowerCase()) {
        case 'circle':
            shape = new Circle(answers.shapecolour, 50); // 50 is radius
            break;
        case 'square':
            shape = new Square(answers.shapecolour, 100); // 100 is side length
            break;
        case 'triangle':
            shape = new Triangle(answers.shapecolour, 100); // 100 is size
            break;
        default:
            throw new Error('Unknown shape type');
    }
    return shape.toSVG();
}
function init(){
    inquirer.prompt(questions).then(data => {
        try {
            const logoText = new LogoText(data.logotext, data.textcolour);
            console.log('Logo text and color set:', logoText.text, logoText.colour);

            const svgShape = createShape(data);
            console.log(svgShape);
            
            const svgContent = `
                <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    ${svgShape}
                    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${logoText.color}">
                        ${logoText.text}
                    </text>
                </svg>`;
            
            // Save to a file
            fs.writeFile('logo.svg', svgContent, 'utf8', (err) => {
                if (err) {
                    throw err;
                }
                console.log('Generated logo.svg');
            });
        } catch (error) {
            console.error('Failed to generate logo:', error.message);
        }
    });
}


init();