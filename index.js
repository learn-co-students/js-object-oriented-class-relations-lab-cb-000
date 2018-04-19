let store =  {drivers: [], passengers: [], trips: []}

let dId = 0
class Driver {
  constructor(name) {
    this.id = ++dId,
    this.name = name

    store.drivers.push(this)
  }
  trips() {
    return store.trips.filter(function(trip) {
      return trip.driverId == this.id
    }.bind(this))
  }
  passengers() {
    return this.trips().map(function(trip) {
      return trip.passenger()
    })
  }
}

let pId = 0
class Passenger {
  constructor(name) {
    this.id = ++pId,
    this.name = name

    store.passengers.push(this)
  }
  trips() {
    return store.trips.filter(function(trip) {
      return trip.passengerId == this.id
    }.bind(this))
  }
  drivers(){
    return this.trips().map(function(trip) {
      return trip.driver()
    })
  }
}

let tId = 0
class Trip {
  constructor(driver, passenger) {
  this.id = ++tId,
  this.driverId = driver.id,
  this.passengerId = passenger.id

  store.trips.push(this)
  }
  driver() {
    return store.drivers.find(function(driver) {
      return this.driverId === driver.id
    }.bind(this))
  }
  passenger() {
    return store.passengers.find(function(passenger) {
      return this.passengerId === passenger.id
    }.bind(this))
  }
}
