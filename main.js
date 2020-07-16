console.log("LLLLOO")
class Traveler {
    constructor(name, food = 1, isHealthy = true) {
        this.name = name
        this.food = food
        this.isHealthy = isHealthy
    }

    hunt() {
        this.food = this.food + 2
    }
    eat() {
        if (this.food < 1) {
            this.isHealthy = false    
        }else {
        this.food= this.food -1
        }
        // else{
         //   this.isHealthy= true
       // }
    }
}
class Wagon {
    constructor(capacity) {

        this.capacity = capacity
        this.passengersList = []
    }
    getAvailableSeatCount() {
        //for(let i =0 ; i<= this.capacity; i++){
        return this.capacity - this.passengersList.length

    }

    join(traveler) {
        if (this.passengersList.length < this.capacity) {
            ///push traviler direct
            this.passengersList.push(traveler)
            // let count = this.passengersList.length
            // traveler= this.passengersList[count +1]

        }
    }
    shouldQuarantine() {
        // loop 
        //check each pass ishelthy
        for (let i = 0; i < this.passengersList.length; i++) {

            // make sure
            if (this.passengersList[i].isHealthy=== false) {
                return true
            }
        } return false
    }
    totalFood() {
        // for and sumition
        let sum = 0
        for (let i = 0; i < this.passengersList.length; i++) {
            sum = sum + this.passengersList[i].food
        }


        return sum

    }


}

class Doctor extends Traveler {
    constructor(name) {

        super(name)
    }

    heal(traveler) {

        traveler.isHealthy = true
    }

}
class Hunter extends Traveler {
    constructor(name) {
        super(name)

        this.food = 2
    }
    hunt() {
        // make sure
        this.food = this.food + 5
        //return this.food
    }

    eat() {
        if (this.food < 2) {
            this.food = 0
            this.isHealthy = false
        }
        else {
            this.food = this.food - 2
        }
    }

    giveFood(traveler, numOfFoodUnits) {
        if (numOfFoodUnits <= this.food) {
            this.food = this.food - numOfFoodUnits
            traveler.food = traveler.food + numOfFoodUnits
        }
    }
}



