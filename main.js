class Traveler {
    constructor(name,) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }

    hunt() {
        this.food += 2
    }

    eat() {

        if (this.food > 0) {
            this.food--
        } else {
            this.isHealthy = false
        }

    }
}


class Wagon {
    constructor(capacity,) {
        this.capacity = capacity
        this.passengers = []
    }

    getAvailableSeatCount() {
        return this.capacity - this.passengers.length
    }

    join(traveler) {
        if (this.getAvailableSeatCount() >= 1) {
            this.passengers.push(traveler)
        }
    }
    shouldQuarantine() {
        for (let i = 0; i < this.passengers.length; i++) {
            var passenger = this.passengers[i]
            if (passenger.isHealthy === false) {
                return true
            }
        } return false
    }

    totalFood() {
        var total = 0
        for (let i = 0; i < this.passengers.length; i++) { 
            const passenger = this.passengers[i]
            total = passenger.food 
        } return total
    } 
}

// from here on is Oregon-Trail-Extended 

class Doctor extends Traveler{
    constructor(name, ){
       super(name,)
    }
    heal(traveler) {  
    if (this.isHealthy = false) {
         this.isHealthy = true
        }
    }
}

class Hunter extends Traveler {
    constructor(name,){
        super(name,)
        this.food = 2
    }
    hunt(){
     this.food += 5
    }

    eat(){
       this.food - 2
       if(this.food <= 2){
        this.isHealthy = false
        }
    }

    giveFood(traveler, numOfFoodUnits) {
        if (this.food <= 0){
            return "traveler has no food to transfer"
        }else {
           traveler = this.food.push(numOfFoodUnits) 
         }
    }
}