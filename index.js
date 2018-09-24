let store = {drivers: [], passengers: [], trips: []}
let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {

  constructor(name){
    this.name = name;
    this.id = ++driverId;
    store.drivers.push(this);
  }

  trips(){
    return store.trips.filter((trip) => trip.driver().id === this.id);
  }

  passengers(){
    let passengers = []
    this.trips().forEach((trip) => passengers.push(trip.passenger()));
    return passengers;
  }

}

class Passenger {

  constructor(name){
    this.name = name;
    this.id = ++passengerId;
    store.passengers.push(this);
  }

  trips(){
    return store.trips.filter((trip) => trip.passenger().id === this.id);
  }

  drivers(){
    let drivers = []
    this.trips().forEach((trip) => drivers.push(trip.driver()));
    return drivers;
  }
}

class Trip {

  constructor(driver, passenger){
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    store.trips.push(this);
  }

  driver(){
    return store.drivers.find((driver) => this.driverId === driver.id)
  }

  passenger(){
    return store.passengers.find((passenger) => this.passengerId === passenger.id)
  }

}
