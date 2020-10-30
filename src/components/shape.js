class Shape {
    constructor() {
        this.color = "red";
    }

    drawShape() {
        console.log("Drawing a Shape");
    }

    calculateArea (){
        console.log("Don't know the area of Unknown shape");
        return 0;
    }
}

module.exports = Shape;
