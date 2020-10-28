// import using require

// declare class


// export class using module.exports

import Shape from './shape';

export default class Circle extends shape {
    constructor(){
        super();
    }
    calculateArea (){
        console.log();
        return 3.14*7*7;
    }
}