function carInfo(manufacturer, modelName) {
    var additionalInfo = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        additionalInfo[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    additionalInfo.forEach(function (info) {
        var key = Object.keys(info)[0];
        car[key] = info[key];
    });
    return car;
}
// Calling the function with required information and additional name-value pairs
var car = carInfo("Toyota", "Camry", { color: "Red" }, { year: 2022 });
// Printing the returned object to verify the information stored correctly
console.log(car);
