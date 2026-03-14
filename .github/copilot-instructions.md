# Copilot Instructions for Taste Tracker Assignment

## Project Overview
This is a JavaScript learning assignment focused on basic programming concepts. The app runs entirely in the browser console - open `index.html` in a browser and inspect the console to see output. No build process or server required.

## Key Files
- `script.js`: Contains all logic, data, and console output
- `index.html`: Simple HTML page that loads the script
- `style.css`: Basic styling (not critical for functionality)

## Development Workflow
1. Edit `script.js` with JavaScript code
2. Open `index.html` in browser (Chrome/Firefox recommended)
3. Open developer tools console (F12 or right-click > Inspect)
4. Refresh page to see updated console output

## Code Patterns
- Use `console.log()` for all output (no DOM manipulation)
- Store data in arrays: `let favoriteFoods = ["item1", "item2"];`
- Iterate with for loops: `for (let i = 0; i < array.length; i++)`
- Template literals for string interpolation: `console.log(\`Text ${variable}\`);`
- Functions for reusable logic: `function name(param) { ... }`

## Common Tasks
- Complete array filtering: Use loops to check conditions and push to new arrays
- String operations: Check for substrings with `includes()` or indexOf
- Comparisons: Use `length` for string/array sizes
- Output formatting: Follow exact string patterns from comments

## Examples from Codebase
- Array creation: `let favoriteFoods = ["Dumplings", "MacAndCheese", ...];`
- Looping output: `for (let i = 0; i < favoriteFoods.length; i++) { console.log(\`One of my favorite foods is ${favoriteFoods[i]}.\`); }`
- Function calls: `printFoodRecommendation(favoriteFoods[0]);`

## Function Naming
- Use descriptive names matching their purpose
- Parameters should reflect single items, not arrays (e.g., `foodName` not `favoriteFoods`)

## Assignment Completion
Focus on implementing tasks 5-10 in `script.js` comments. Each task builds on previous array manipulation skills.