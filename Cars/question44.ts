function carInfo(manufacturer: string, modelName: string, ...additionalInfo: Record<string, any>[]): Record<string, any> {
    const car: Record<string, any> = {
        manufacturer: manufacturer,
        modelName: modelName
    };

    additionalInfo.forEach(info => {
        const key = Object.keys(info)[0];
        car[key] = info[key];
    });

    return car;
}

// Calling the function with required information and additional name-value pairs
const car = carInfo("Toyota", "Camry", {color: "Red"}, {year: 2022});

// Printing the returned object to verify the information stored correctly
console.log(car);
