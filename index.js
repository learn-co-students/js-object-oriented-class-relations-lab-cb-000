// An object should be added to the store upon being initialized.
let store = {
  drivers: [],
  passengers: [],
  trips: []
};

// Driver class
// A driver has many trips, and has many passengers through trips.
// new Driver() - initialized with a name; returns a JavaScript object that has attributes of id, and name
let driverId = 0;
class Driver {
  constructor (name) {
    this.id = driverId++;
    this.name = name;
    store.drivers.push(this); // add object to store upon being initialized
  }

  // trips() - returns all of the trips that a driver has taken
  trips() {
    return store.trips.filter(trip => {
      return trip.driverId == this.id;
    });
  }

  // passengers() - returns all of the passengers that a driver has taken on a trip
  passengers() {
    return this.trips().map(trip => {
      return trip.passenger();
    });
  }
}


// Passenger class
// A passenger has many trips, and has many drivers through trips.
// new Passenger() - initialized with a name; returns a JavaScript object that has attributes of id, and name
let passengerId = 0;
class Passenger {
  constructor (name) {
    this.id = passengerId++;
    this.name = name;
    store.passengers.push(this); // add object to store upon being initialized
  }

  // trips() - returns all of the trips that a passenger has taken
  trips() {
    return store.trips.filter(trip => {
      return trip.passengerId == this.id;
    });
  }
  // drivers() - returns all of the drivers that has taken a passenger on a trip
  drivers() {
    return this.trips().map(trip => {
      return trip.driver();
    });
  }
}


// Trip class
// A trip belongs to a driver and belongs to a passenger.
// new Trip() - initialized with an instance of driver and an instance of passenger; returns a JavaScript that has attributes id, driverId, and passengerId
let tripId = 0;
class Trip {
  constructor (driver, passenger) {
    this.id = tripId++;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    store.trips.push(this); // add object to store upon being initialized
  }

  // driver() - returns the driver associated with the trip
  driver() {
    return store.drivers.find(driver => {
      return driver.id === this.driverId;
    });
  }

  // passenger() - returns the passenger associated with the trip
  passenger() {
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId;
    });
  }
}
