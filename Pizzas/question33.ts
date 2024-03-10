const favoritePizzas: string[] = ["chicken tikka pizza", "malai boti pizza", "afghani pizza"];

// Printing pizza names
console.log("Pizza Names:");
for (let pizza of favoritePizzas) {
    console.log(pizza);
}

// Printing sentences about each pizza
console.log("\nSentences about each pizza:");
for (let pizza of favoritePizzas) {
    console.log(`I like ${pizza} .`);
}

// Additional sentence about loving pizza
console.log("\nI really love pizza!");

