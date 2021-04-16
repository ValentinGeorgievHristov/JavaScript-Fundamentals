class Vehicle { //Миро
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = {...parts, quality: parts.engine * parts.power}; //parts is an object {engine, power}
        this.fuel = fuel;
        // this.parts.quality = parts.engine * parts.power;//{engine, power, quality}
    }

    drive(fuelLoss) {
        this.fuel -= fuelLoss
    }
}



const opelVectraParts = {
    engine: 100,
    power:60,
    quality:160
};

const myVehicle = new Vehicle('Opel', 'Vectra', opelVectraParts, 190);

console.log(myVehicle);