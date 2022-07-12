class Ninja{
    constructor(name, health){
        this.speed = 3
        this.strenght = 3
        this.name = name
        this.health = health
    }
    sayName(){
        console.log("Ninjas Name: ", this.name)
    }

    showStats(){
        console.log(this.name)
        console.log(this.strenght)
        console.log(this.speed)
        console.log(this.health)
    }

    drinkSake(){
        this.health += 10
    }
}


class Sensei extends Ninja{
    constructor(name, health){
        super(name, health)
        this.wisdom = 10 
    }

    speakWisdom(){
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }

}
const myNinja = new Ninja("Armen", 100)
myNinja.drinkSake()
myNinja.showStats()


const superSensei = new Sensei("Arka", 200)
superSensei.drinkSake()
superSensei.speakWisdom()
superSensei.showStats()