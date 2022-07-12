
//Define a class
class Vehicle{
    constructor(manufacturer, model, color){
        //LEAVE A DEFAULT VALUE OF ZERO FOR A STARTING POINT FOR FUTURE CLASSES AND INSTANCES OF NEW VEHICLE
        this.miles = 0
        this.manufacturer = manufacturer
        this.model = model
        this.color = color
    }
//OTHER METHODS
    test(){
        console.log("test method")
    }

    drive(amount){
        this.miles += amount
        console.log("car is being driven")
    }
    odo(){
        console.log("Total Mileage: ", this.miles)
    }

    carInfo = () => {
        console.log(this.manufacturer)
        console.log(this.model)
        console.log(this.color)
    }
}

//2. INSTANTIATE AN OBJECT 

const myCar = new Vehicle("Toyoda", "Camry", "Black")
myCar.drive(20)
myCar.drive(5)
myCar.drive(55)
console.log(myCar.miles)
myCar.odo()
// const can't be reassignet to a whole other variable

////////INHERITANCE////////

class M5 extends Vehicle{
    // Member Variables
    // Constructors 
    constructor(manufacturer, model, color, turbo){
        //the super lets you inherit the class(Parent>Child Relationship)
        super(manufacturer, model, color)
        this.turbo = turbo
    }


    // Methods
}

const newCar = new M5("Bmw", "M5","Black", true)
newCar.drive(5)
newCar.odo()

//JS is a MULTI PARADIYM LANGUAGE, it can take care of both OOP & Functional Programming
// Doesn't mean its the best at everything
//Js is mainly a functional language, chances are you will be using it for functional progamming. 

