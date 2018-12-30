let store = {
    drivers: [],
    passengers: [],
    trips: []
};

let newDriverId = 0;

class Driver {
    constructor(name) {
        this.name = name;
        this.id = ++newDriverId;
        store.drivers.push(this);
    }

    trips() {
        return store.trips.filter((trip) => {
            return trip.driverId === this.id;
        });
    }

    passengers() {
        return this.trips()
            .map((trip) => {
                return trip.passengerId;
            })
            .filter((v, i, a) => a.indexOf(v) === i)
            .map((passengerId) => {
                return store.passengers.find((passenger) => {
                    return passenger.id === passengerId;
                })
            });
    }
}

let newPassengerId = 0;

class Passenger {
    constructor(name) {
        this.name = name;
        this.id = ++newPassengerId;
        store.passengers.push(this);
    }

    trips() {
        return store.trips.filter((trip) => {
            return trip.passengerId === this.id;
        });
    }

    drivers() {
        return this.trips()
            .map((trip) => {
                return trip.driverId;
            })
            .filter((v, i, a) => a.indexOf(v) === i)
            .map((driverId) => {
                return store.drivers.find((driver) => {
                    return driver.id === driverId;
                })
            });
    }
}

let newTripId = 0;

class Trip {
    constructor(driver, passenger) {
        this.id = ++newTripId;
        this.driverId = driver.id;
        this.passengerId = passenger.id;
        store.trips.push(this);
    }

    passenger() {
        return store.passengers.find((passenger) => {
            return this.passengerId === passenger.id;
        });
    }

    driver() {
        return store.drivers.find((driver) => {
            return this.driverId === driver.id;
        });
    }
}