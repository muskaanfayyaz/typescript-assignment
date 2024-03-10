var animals = ["Dog", "Cat", "Rabbit"];
// Printing animal names
console.log("Animal Names:");
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
// Printing statements about each animal
console.log("\nStatements about each animal:");
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    switch (animal) {
        case "Dog":
            console.log("A ".concat(animal, " would make a great pet."));
            break;
        case "Cat":
            console.log("A ".concat(animal, " would make a great companion."));
            break;
        case "Rabbit":
            console.log("A ".concat(animal, " would make a cute pet."));
            break;
        default:
            console.log("A ".concat(animal, " would make an interesting pet."));
            break;
    }
}
// Statement about common characteristic
console.log("\nAny of these animals would make a great pet!");
