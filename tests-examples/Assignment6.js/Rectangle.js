//Create a function that calculates the area of a rectangle. 
//It should take length and width as parameters, with width defaulting to 5 if not provided.

function calculateRectangleArea(length, width = 5) {
    return length * width;
}
const length = 8;
const area = calculateRectangleArea(length);
console.log("area of the rectangle:",area);
