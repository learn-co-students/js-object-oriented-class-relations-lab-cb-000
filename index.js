const store = {
  drivers: [],
  passengers: [],
  trips: []
}

// Driver Class
// ------------------------------------
let driverId = 0;

class Driver {
  constructor(name) {
    this.id = ++driverId;
    this.name = name;

    store.drivers.push(this);
  }

  trips() {
    return store.trips.filter(
      function (trip) {
        return trip.driverId === this.id;
      }.bind(this)
    );

    // Alternative:
    // return store.trips.filter(trip => {
    //   return trip.driverId == this.id;
    // });
  }

  passengers() {
    const trips = this.trips();

    return trips.map(function(trip) {
      return trip.passenger();
    });
  }
}

// Passenger Class
// ------------------------------------
let passengerId = 0;

class Passenger {
  constructor(name) {
    this.id = ++passengerId;
    this.name = name;

    store.passengers.push(this);
  }

  trips() {
    return store.trips.filter(
      function(trip) {
        return trip.passengerId === this.id;
      }.bind(this)
    );

    // Alternative
    // return store.trips.filter(trip => {
    //   return trip.passengerID == this.id;
    // });
  }

  drivers() {
    const trips = this.trips();

    return trips.map(function(trip) {
      return trip.driver();
    });
  }
}

// Trip Class
// ------------------------------------
let tripId = 0;

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;

    store.trips.push(this);
  }

  driver() {
    return store.drivers.find(
      function(driver) {
        return driver.id === this.driverId;
      }.bind(this)
    );

    // Alternative
    // return store.drivers.find(driver => {
    //   return driver.id === this.driverId;
    // });
  }

  passenger() {
    return store.passengers.find(
      function(passenger) {
        return passenger.id === this.passengerId;
      }.bind(this)
    );

    // Alternative
    // return store.passengers.find(passenger => {
    //   return passenger.id === this.passengerId;
    // });
  }
}
