class BMI{
    constructor(height, weight){
        this.height = height;
        this.weight = weight;
    }
    CalculateBMI(){
        let bmi = this.weight/(this.height**2);
        return bmi;
    }
}
person1 = new BMI(1.90, 120);
let newBMI = person1.CalculateBMI();
console.log(newBMI);