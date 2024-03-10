const animals: string[] = ["Dog", "Cat", "Rabbit"];

// Printing animal names
console.log("Animal Names:");
for (let animal of animals) {
    console.log(animal);
}

// Printing statements about each animal
console.log("\nStatements about each animal:");
for (let animal of animals) {
    switch (animal) {
        case "Dog":
            console.log(`A ${animal} would make a great pet.`);
            break;
        case "Cat":
            console.log(`A ${animal} would make a great companion.`);
            break;
        case "Rabbit":
            console.log(`A ${animal} would make a cute pet.`);
            break;
        default:
            console.log(`A ${animal} would make an interesting pet.`);
            break;
    }
}

// Statement about common characteristic
console.log("\nAny of these animals would make a great pet!");
