// import using require

// declare class


// export class using module.exports

const Shape = require('./shape');
class Circle{
    constructor(){
        super();
    }
    calculateArea (){
        console.log();
        return 3.14*7*7;
    }
}

module.exports = Circle;