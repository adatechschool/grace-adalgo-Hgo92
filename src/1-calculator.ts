/*
This function should return the result
of an addition,
subtraction,
multiplication, or
division

depending on the operator provided.

For example:

const x = 2
const y = 3
const operator = '+'

calculator(x, y, operator) => return 5
*/
export const calculator = (x : number, y : number, operator : string ) => {
    if (typeof x !== "number" || typeof y !== 'number') {
        return ("is empty")
    }
    
    switch (operator) {
        case "+" : 
        return x + y;
        case "-" : 
        return x - y;
        case "/" : 
        return x / y;
        case "*" : 
        return x * y;
        default : 
        return 'no operators'
    }
};