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
        if (this.getAvailableSeatCount() > 1) {
            this.passengers.push(traveler)
        }
    }
    shouldQuarantine() {
        for (i = 0; i < this.passengers.length; i++) {
            var passenger = this.passengers[i]
            if (passenger.isHealthy === false) {
                return true
            }
        } return false
    }

    totalFood() {
        var total = 0
        for (i = 0; i < this.passengers.length; i++) {
            return total++
        }
    }
}