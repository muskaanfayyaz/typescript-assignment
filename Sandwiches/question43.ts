function makeSandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("You ordered an empty sandwich.");
    } else {
        console.log("You ordered a sandwich with the following items:");
        items.forEach(item => console.log("- " + item));
    }
    console.log(); // Empty line for spacing
}

// Calling the function with different numbers of arguments
makeSandwich("pattie", "Lettuce", "Tomato", "Mayo");
makeSandwich("pattie", "Cheese");
makeSandwich(); // Empty sandwich
