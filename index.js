let driverId = 0;
let passengerId = 0;
let tripId = 0;
let store = { drivers: [], passengers: [] , trips: []};

class Driver{
  constructor(name){
    this.id = ++driverId;
    this.name = name;
    store.drivers.push(this);
  }

  trips(){
    return store.trips.filter(
        function(t) {
            return t.driverId === this.id;
        }.bind(this)
    );
  }

  passengers(){
    return this.trips().map(
      function(t) { return t.passenger() }
    )
  }

}


class Passenger{
  constructor(name){
    this.id = ++passengerId;
    this.name = name;
    store.passengers.push(this);
  }

  trips(){
    return store.trips.filter(
        function(t) {
            return t.passengerId === this.id;
        }.bind(this)
    );
  }

  drivers(){
    return this.trips().map(
      function(t) { return t.driver(); }
    )
  }



}


class Trip{
  constructor(driver, passenger){
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    store.trips.push(this);
  }

  driver(){
    return store.drivers.find(
        function(d) {
            return d.id === this.driverId;
        }.bind(this)
    );
  }

  passenger(){
    return store.passengers.find(
        function(p) {
            return p.id === this.passengerId;
        }.bind(this)
    );
  }

}
