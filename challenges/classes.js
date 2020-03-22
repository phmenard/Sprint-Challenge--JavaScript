// 1. Copy and paste your prototype in here and refactor into class syntax.

/*const CuboidMaker = function (lenght, width, height){
    this.lenght = lenght;
    this.width = width;
    this.height = height;
  };*/

class CuboidMaker {
    constructor(lenght, width, height){
        this.lenght = lenght;
        this.width = width;
        this.height = height;
    }

    volume() {
        return this.lenght * this.width * this.height;
    }

    surfaceArea() {
        return 2 * (this.lenght * this.width + this.lenght * this.height + this.width * this.height);
    }
}

const cuboid = new CuboidMaker(4, 5, 5);


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and 
//create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    constructor(lenght, width, height){
        super(lenght, width, height);
    }
} 

const cube = new CubeMaker(5, 5, 5);
console.log("Stretch challenge for cubes.");
console.log(cube.volume()); 
console.log(cube.surfaceArea()); 