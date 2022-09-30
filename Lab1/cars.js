class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }    
    Information(){
        console.log(`Make: ${this.make}\nModel: ${this.model}\nYear: ${this.year}`);
    }
}
class Cars extends Vehicle{
    constructor(make, model, year, doors){
        super(make, model, year);
        this.doors = doors;
    }
    Information(){
        super.Information();
        console.log(`Doors: ${this.doors}`);
    }
}
var car = new Cars("Toyota", "Corolla", 2006, 4);
car.Information();